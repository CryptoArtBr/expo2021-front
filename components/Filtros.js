import styles from './Filtros.module.css'

export default function Filtros () {
  return <div className={styles.filtros}>
    <label htmlFor="categoria">categoria:</label>
    <select className={styles.filtro_select} name="categoria" id="categoria">
      <option>video</option>
      <option>música</option>
      <option>arte genertiva</option>
      <option>escultura 3d</option>
    </select>

    <label htmlFor="estilo">estilo:</label>
    <select className={styles.filtro_select} name="estilo" id="estilo">
      <option>video</option>
      <option>música</option>
      <option>arte genertiva</option>
      <option>escultura 3d</option>
    </select>

    <label htmlFor="estado">estado:</label>
    <select className={styles.filtro_select} name="estado" id="estado">
      <option>video</option>
      <option>música</option>
      <option>arte genertiva</option>
      <option>escultura 3d</option>
    </select>
  </div>
}