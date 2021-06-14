import Head from 'next/head'
import styles from '../../src/styles/Page.module.css'
import { Header, Footer, SignUpForm, BGChapado } from '../../src/components'

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <BGChapado />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <SignUpForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
