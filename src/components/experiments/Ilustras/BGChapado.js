import styles from './BGChapado.module.css'
import { MonstroSVG } from './MonstrãoSVG'

export const BGChapado = () => {
  return (
    <div className={styles.bg_chapado}>
      <MonstroSVG />
    </div>
  )
}
