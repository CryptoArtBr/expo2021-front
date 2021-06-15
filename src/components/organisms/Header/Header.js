import { useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'
import styles from './Header.module.css'
import { Logo, Button } from '../../atoms'
import { UserBox } from '../../molecules'
import CloseMenuSVG from '../../atoms/SVG/CloseMenuSVG'
import HamburguerMenuSVG from '../../atoms/SVG/HamburguerMenuSVG'

const stub = (router) => router.push('/auth/login?returnTo=/')
const signupStub = (router) => router.push('/auth/signup?returnTo=/')

export const Header = ({
  isAuthenticated,
  login = stub,
  logout = stub,
  signup = signupStub,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <header className={`${styles.header} ${isOpen && styles.header_active}`}>
        <div className={styles.header_wrapper}>
          <div className={styles.logo_container}>
            <Logo href="/" />
            <button
              className={styles.menu_toggle}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CloseMenuSVG /> : <HamburguerMenuSVG />}
            </button>
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
              {isAuthenticated ? (
                <Button onClick={() => logout(router)}>sair</Button>
              ) : (
                <>
                  <Button onClick={() => signup(router)} type="secondary">
                    inscreva-se
                  </Button>
                  <Button onClick={() => login(router)}>entrar</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      {!isAuthenticated && isDrawerOpen ? (
        <div className={styles.header_drawer}>
          <UserBox />
        </div>
      ) : null}
    </>
  )
}
