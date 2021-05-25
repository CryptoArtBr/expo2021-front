import styles from './Colecao.module.css'
import GaleriaHorizontal from './GaleriaHorizontal/GaleriaHorizontal'
import InfoBox from './InfoBox/InfoBox'

export default function Colecao ({autor, obras}) {
  return <div className={styles.colecao}>
    <InfoBox autor={autor}>
      <div>
        <h3>sobre a colecao</h3>
        <p>lalalalala lalallaa lallala lalalalala lalallaa lallala lalalalala lalallaa lallala lalalalala lalallaa lallala lalalalala lalallaa lallala lalalalala lalallaa lallala</p>
      </div>
    </InfoBox>
    <GaleriaHorizontal obras={obras} />
  </div>
}