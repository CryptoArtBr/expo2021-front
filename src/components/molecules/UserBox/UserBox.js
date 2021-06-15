import { useState } from 'react'
import { useAuth } from '../../../services/auth'

import { Button } from '../../atoms'
import { SignInForm } from '../../forms/SignInForm/SignInForm'
import styles from './UserBox.module.css'

export const UserBox = ({ open = true }) => {
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

      <SignInForm
        onSubmit={(formData) => {
          auth.signIn(formData)
        }}
      />
    </div>
  )
}
