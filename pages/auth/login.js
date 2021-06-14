import Head from 'next/head'

import styles from '../../src/styles/Page.module.css'
import { UserBox } from '../../src/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <main className={styles.main}>
        <UserBox />
      </main>
    </div>
  )
}
