import Head from 'next/head'
import Header from '../src/regions/Header'
import Footer from '../src/regions/Footer/Footer'

import styles from '../src/styles/Page.module.css'
import Crypto3D from '../src/components/experiments/Crypto3D/Crypto3D'

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
