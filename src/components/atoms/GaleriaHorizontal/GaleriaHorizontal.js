import { useHorizontalScroll } from "../../utils/useSideScroll";
import styles from './GaleriaHorizontal.module.css'
import Card from '../Card/Card'

export default function GaleriaHorizontal ({obras = []}) {
  const colecaoElement = useHorizontalScroll(null)
  return <div ref={colecaoElement} className={styles.galeria}>
      <div className={styles.galeria__obras}>
          {obras.map && obras.map(obra => <Card key={`obra-${obra.slug}`} item={obra} />)}
      </div>
    </div>
}