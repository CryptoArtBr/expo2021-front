import styles from './GridObras.module.css'
import Card from './Card/Card'

export default function GridObras () {
  return <div className={styles.grid_obras}>
    {Array.from(Array(10).keys()).map((item, index) => <Card key={`obra-${index}`} item={{title:`obra #${index}`, image:"http://placekitten.com/g/300/400"}} />)}
  </div>
}