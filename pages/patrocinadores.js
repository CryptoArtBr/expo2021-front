import Head from 'next/head'
import { Header, Footer } from '../src/components'

import styles from '../src/styles/Page.module.css'

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
