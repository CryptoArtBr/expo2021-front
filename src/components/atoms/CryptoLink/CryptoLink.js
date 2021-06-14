import Link from 'next/link'
import styles from './CryptoLink.module.css'

export const CryptoLink = ({ url = '', title = '' }) => (
  <Link href={url}>
    <a className={styles.crypto_link}>{title}</a>
  </Link>
)
