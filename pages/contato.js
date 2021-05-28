import Head from 'next/head'
import Header from '../regions/Header'
import Footer from '../regions/Footer/Footer'

import styles from '../styles/Page.module.css'

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