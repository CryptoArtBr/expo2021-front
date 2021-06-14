import Head from 'next/head'
import { Header, Footer, JogoCryptoBrick, Button } from '../src/components'

import styles from '../src/styles/Page.module.css'
import Link from 'next/link'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.flex_row}>
        <Link href="/colecoes">
          <div className={styles.colecoes_btn}>
            <Button>acessar coleções</Button>
          </div>
        </Link>
        <JogoCryptoBrick />
      </main>
      <Footer />
    </div>
  )
}
