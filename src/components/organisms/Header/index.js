import { useAuth } from '../../../services/auth'
import { Header as HeaderComponent } from './Header'

export const Header = () => {
  const auth = useAuth()
  return (
    <HeaderComponent
      isAuthenticated={auth.isAuthenticated}
      logout={auth.signOut}
    />
  )
}
