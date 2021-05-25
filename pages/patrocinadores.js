import Head from 'next/head'
import Header from '../components/Regions/Header'
import Footer from '../components/Regions/Footer'

import styles from '../styles/Page.module.css'

export default function Patrocinadores() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <p>esses são os patrocinadores da CryptoArtBr</p>
        <ul>
          <li>doge</li>
          <li>to the moon corps</li>
          <li>HoDl.ltda</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}