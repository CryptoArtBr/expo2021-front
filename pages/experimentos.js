import Head from 'next/head'
import Header from '../regions/Header'
import Footer from '../regions/Footer/Footer'

import styles from '../styles/Page.module.css'
import Crypto3D from '../components/experiments/Crypto3D/Crypto3D'
import JogoCryptoBrick from '../components/experiments/JogoCryptoBrick/JogoCryptoBrick'

export default function Experimentos() {

  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Crypto3D />
        <br />
        <br />
        <br />
        <JogoCryptoBrick />
      </main>
      <Footer />
    </div>
  )
}