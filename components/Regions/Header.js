import { useState } from 'react'

import Link from 'next/link'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import CloseMenuSVG from '../SVG/CloseMenuSVG'
import HamburguerMenuSVG from '../SVG/HamburguerMenuSVG'
import Button from '../Button/Button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <header className={`${styles.header} ${isOpen && styles.header_active}`}>
    <div className={styles.header_wrapper}>
      <div className={styles.logo_container}>
        <Logo href="/" />
        <button className={styles.menu_toggle} onClick={()=>setIsOpen(!isOpen)}>{isOpen? <CloseMenuSVG /> : <HamburguerMenuSVG />}</button>
      </div>
      <div className={styles.menu}>
        <nav className={styles.menu__items}>
          <Link href="/sobre">
            <a className={styles.link}>sobre</a>
          </Link>
          <Link href="/colecoes">
            <a className={styles.link}>coleções</a>
          </Link>
          <Link href="/uma-colecao">
            <a className={styles.link}>uma coleção</a>
          </Link>
          <Link href="/contato">
            <a className={styles.link}>contato</a>
          </Link>
          <Link href="/patrocinadores">
            <a className={styles.link}>patrocinadores</a>
          </Link>
        </nav>
        <div className={styles.menu__items}>
          <Button onClick={() => {}} type="secondary">inscreva-se</Button>
          <Button onClick={() => {}}>entrar</Button>
        </div>
      </div>
    </div>
  </header>
}

export default Header