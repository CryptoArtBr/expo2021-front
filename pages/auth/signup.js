import Head from 'next/head'
import Header from '../../regions/Header'
import Footer from '../../regions/Footer/Footer'

import styles from '../../styles/Page.module.css'
import { SignUpForm } from '../../components/forms/SignUpForm/SignUpForm'

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
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
