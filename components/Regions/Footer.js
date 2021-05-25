import Link from 'next/link'
import Logo from '../Logo/Logo'
import styles from './Footer.module.css'

const Footer = () => {
  return <footer className={styles.footer}>
    <div className="container">
      <div className={`row ${styles.logo_container}`}>
        <Logo href="/" />
      </div>
      <div className="row">
        <div className="col-2">
          <p className={styles.title}>Sobre o evento</p>
          <a className={styles.link}>Tópico 01</a>
          <a className={styles.link}>Tópico 02</a>
          <a className={styles.link}>Tópico 03</a>
          <a className={styles.link}>Tópico 04</a>
        </div>
        <div className="col-2">
          <p className={styles.title}>A comunidade</p>
          <a className={styles.link}>Tópico 01</a>
          <a className={styles.link}>Tópico 02</a>
          <a className={styles.link}>Tópico 03</a>
          <a className={styles.link}>Tópico 04</a>
        </div>
        <div className="col-2">
          <p className={styles.title}>Contribua</p>
          <a className={styles.link}>Tópico 01</a>
          <a className={styles.link}>Tópico 02</a>
          <a className={styles.link}>Tópico 03</a>
          <a className={styles.link}>Tópico 04</a>
        </div>
        <div className="col-2">
          <p className={styles.title}>Acompanhe</p>
          <a className={styles.link}>Tópico 01</a>
          <a className={styles.link}>Tópico 02</a>
          <a className={styles.link}>Tópico 03</a>
          <a className={styles.link}>Tópico 04</a>
        </div>
      </div>
    </div>
  </footer> 
}

export default Footer