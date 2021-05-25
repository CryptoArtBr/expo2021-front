import Head from 'next/head'
import Header from '../components/Regions/Header'
import Footer from '../components/Regions/Footer'

import styles from '../styles/Page.module.css'
import GridObras from '../components/GridObras'
import DescricaoObra from '../components/DescricaoObra'


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