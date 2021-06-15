import Head from 'next/head'
import { useAuth } from '../../src/services/auth'

import styles from '../../src/styles/Page.module.css'
import { UserBox } from '../../src/components'
import { Button, SignUpForm } from '../../src/components'

export default function SignUp() {
  const auth = useAuth()

  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <main className={styles.main}>
        <UserBox>
          {auth.isAuthenticated ? (
            <>
              <p>Olá {auth.user.user.username}</p>
              <p>voce é {auth.user.user.role.name}</p>
              <Button
                onClick={() => {
                  auth.signOut()
                }}
              >
                sair
              </Button>
            </>
          ) : (
            <>
              {auth.isError && <p>{auth.error.message}</p>}

              <SignUpForm
                onSubmit={(formData) => {
                  auth.signUp(formData)
                }}
              />
            </>
          )}
        </UserBox>
      </main>
    </div>
  )
}
