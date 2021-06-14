import Head from 'next/head'
import { Header, Footer } from '../src/components'
import styles from '../src/styles/Page.module.css'

export default function Contato() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <p>Entre em contato.</p>
      </main>
      <Footer />
    </div>
  )
}
