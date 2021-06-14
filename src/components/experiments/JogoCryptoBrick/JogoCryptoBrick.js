import { useLayoutEffect, useRef } from 'react'
import styles from './JogoCryptoBrick.module.css'

import CryptoBrick from './jogo/CryptoBrick'

export const JogoCryptoBrick = () => {
  const canvas = useRef(null)
  useLayoutEffect(() => {
    if (canvas.current) {
      CryptoBrick(canvas.current)
    }
  }, [canvas])
  return <canvas ref={canvas} className={styles.area_jogo}></canvas>
}
