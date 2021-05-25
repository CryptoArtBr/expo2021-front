import Head from 'next/head'
import Header from '../components/Regions/Header'
import Footer from '../components/Regions/Footer'

import styles from '../styles/Page.module.css'
import Filtros from '../components/Filtros'
import Colecao from '../components/Colecao'
import { WP_API_ENDPOINT } from '../env'
import { convertWpPostsToCollections } from '../utils/convertWpData'

const Colecoes = ({posts = []}) => {
  const colecoes = convertWpPostsToCollections(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Filtros />
        {colecoes.map(colecao => <Colecao key={`colecao-${colecao.autor}`} autor={colecao.autor} obras={colecao.obras}/>)}
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await fetch(`${WP_API_ENDPOINT}/posts?_embed`)
    .then(res => {
      if (res.status === 200) return res.json()
      return []
    })
  return {
    props: {
      posts: posts.map(post => {
        const categories = (post._embedded && 
          post._embedded['wp:term'] &&
          post._embedded['wp:term'][0]) ? post._embedded['wp:term'][0] : []
        const mediaurl =  (post._embedded && 
            post._embedded['wp:featuredmedia'] &&
            post._embedded['wp:featuredmedia'][0] &&
            post._embedded['wp:featuredmedia'][0].source_url) ? post._embedded['wp:featuredmedia'][0].source_url : ''
        return {
          title: post.title.rendered,
          slug: post.slug,
          image: mediaurl,
          categories
        }
      })
    }
  }
}

export default Colecoes