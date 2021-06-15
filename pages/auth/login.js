import Head from 'next/head'
import { useAuth } from '../../src/services/auth'

import styles from '../../src/styles/Page.module.css'
import { Button, UserBox, SignInForm } from '../../src/components'

export default function Home() {
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

              <SignInForm
                onSubmit={(formData) => {
                  auth.signIn(formData)
                }}
              />
            </>
          )}
        </UserBox>
      </main>
    </div>
  )
}
