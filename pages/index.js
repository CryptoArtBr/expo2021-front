import Head from 'next/head'
import { Header, Footer, Crypto3D } from '../src/components'

import styles from '../src/styles/Page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Crypto3D />
      </main>
      <Footer />
    </div>
  )
}
