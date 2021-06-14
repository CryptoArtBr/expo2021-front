import Head from 'next/head'
import { Header, Footer, GridObras, DescricaoObra } from '../src/components'

import styles from '../src/styles/Page.module.css'

export default function Colecoes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <DescricaoObra />
        <GridObras />
      </main>
      <Footer />
    </div>
  )
}
