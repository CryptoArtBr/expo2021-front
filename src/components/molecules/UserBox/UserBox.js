import { useState } from 'react'
import { useAuth } from '../../services/auth'

import Button from '../../atoms/Button/Button'
import styles from './UserBox.module.css'

const UserBox = ({ open = true }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()

  if (auth.isAuthenticated) {
    return (
      <div className={open ? styles.user_box : styles.user_box__collapsed}>
        <p>Olá {auth.user.user.username}</p>
        <p>voce é {auth.user.user.role.name}</p>
        <Button
          onClick={() => {
            auth.signOut()
          }}
        >
          sair
        </Button>
      </div>
    )
  }

  return (
    <div className={open ? styles.user_box : styles.user_box__collapsed}>
      {auth.isError && <p>{auth.error.message}</p>}

      <div className={styles.user_box__form}>
        <div className={styles.user_box__field}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.user_box__field}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          onClick={() => {
            auth.signIn({
              email,
              password,
            })
          }}
        >
          entrar
        </Button>
      </div>
    </div>
  )
}

export default UserBox
