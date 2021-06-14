import Link from 'next/link'
import styles from './CryptoLink.module.css'

export default ({url='', title=''}) => <Link href={url}><a className={styles.crypto_link}>{title}</a></Link>