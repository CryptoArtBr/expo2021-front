import { createContext } from 'react'
import { initialAuthState } from './auth-state'

const stub = () => {
  throw new Error('You forgot to wrap your component in <AuthProvider>.')
}

const initialContext = {
  ...initialAuthState,
  signIn: stub,
  signOut: stub,
}

export const AuthContext = createContext(initialContext)