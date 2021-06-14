import { AuthProvider } from '../services/auth'
import { CookiesProvider } from 'react-cookie'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CookiesProvider>
  )
}

export default MyApp
