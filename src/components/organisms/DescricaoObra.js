import styles from './DescricaoObra.module.css'
import { InfoBox } from '../molecules'

export default function DescricaoObra() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Título da colecao</h2>
        <p>
          Paragrafo explicando do que se trata a mesma. explica, explica,
          explica. Rola umas referencias de onde vieram as ideias. Fala do
          processo criativo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <InfoBox />
    </div>
  )
}
