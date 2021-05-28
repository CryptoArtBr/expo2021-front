import { useCallback, useEffect, useReducer } from 'react'
import { initialAuthState } from './auth-state'
import { reducer } from './reducer'
import {
  onAuthStateChanged,
  signIn as apiSignIn,
  signOut as apiSignOut,
} from './auth-api'
import { AuthContext } from './auth-context'
import { useRouter } from 'next/router'
import { resolveReturnToUrl } from './resolver-return-to-url'

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState)
  const router = useRouter()

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any
  // component that utilizes this hook to re-render with the
  // latest auth object.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: 'AUTHENTICATED', user })
      } else {
        dispatch({ type: 'UNAUTHENTICATED' })
      }
    })
    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  const signIn = useCallback(async (credentials) => {
    dispatch({ type: 'LOADING' })
    try {
      const { data } = await apiSignIn(credentials)
      const user = data

      if (user) {
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
      await apiSignOut()
      dispatch({ type: 'UNAUTHENTICATED' })
    } catch (error) {
      dispatch({ type: 'ERROR', error })
    }
    router.push('/')
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
