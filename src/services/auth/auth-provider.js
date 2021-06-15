import { useCallback, useEffect, useReducer } from 'react'
import { useCookies } from 'react-cookie'
import { initialAuthState } from './auth-state'
import { reducer } from './reducer'
import {
  onAuthStateChanged,
  signIn as apiSignIn,
  signOut as apiSignOut,
  signUp as apiSignUp,
} from './auth-api'
import { AuthContext } from './auth-context'
import { useRouter } from 'next/router'
import { resolveReturnToUrl } from './resolver-return-to-url'

const CRYPTO_PERSON_COOKIE = 'crypto-person'

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState)
  const router = useRouter()
  const [userCookie, setUserCookie, removeUserCookie] = useCookies([
    CRYPTO_PERSON_COOKIE,
  ])

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any
  // component that utilizes this hook to re-render with the
  // latest auth object.
  useEffect(() => {
    if (userCookie[CRYPTO_PERSON_COOKIE]) {
      dispatch({
        type: 'AUTHENTICATED',
        user: userCookie[CRYPTO_PERSON_COOKIE],
      })
    }
  }, [])

  const signIn = useCallback(async (credentials) => {
    dispatch({ type: 'LOADING' })
    try {
      const { data } = await apiSignIn(credentials)
      const user = data

      if (user) {
        setUserCookie(CRYPTO_PERSON_COOKIE, user, { path: '/' })
        dispatch({ type: 'AUTHENTICATED', user })
      } else {
        dispatch({ type: 'UNAUTHENTICATED' })
      }

      const returnTo = resolveReturnToUrl()

      if (returnTo) router.replace(returnTo)
    } catch (error) {
      dispatch({ type: 'ERROR', error })
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      removeUserCookie(CRYPTO_PERSON_COOKIE)
      await apiSignOut()
      dispatch({ type: 'UNAUTHENTICATED' })
    } catch (error) {
      dispatch({ type: 'ERROR', error })
    }
    router.push('/')
  }, [])

  const signUp = useCallback(async (credentials) => {
    dispatch({ type: 'LOADING' })

    try {
      const { data } = await apiSignUp(credentials)
      const user = data

      if (user) {
        setUserCookie(CRYPTO_PERSON_COOKIE, user, { path: '/' })
        dispatch({ type: 'AUTHENTICATED', user })
      } else {
        dispatch({ type: 'UNAUTHENTICATED' })
      }
    } catch (error) {
      dispatch({ type: 'ERROR', error })
    }
  })

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
