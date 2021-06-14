import Link from 'next/link'
import styles from './Logo.module.css'

export const Logo = ({ href }) => (
  <Link href={href}>
    <a className={styles.logo}>
      crypto
      <br />
      artebr21
    </a>
  </Link>
)
