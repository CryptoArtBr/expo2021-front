import { CryptoLink } from '../CryptoLink/CryptoLink'
import styles from './Card.module.css'

export const Card = ({ item, autor }) => {
  return (
    <div className={styles.card}>
      <a href={item.link}>
        <img src={item && item.image} className={styles.card__image}></img>
        {item && item.title ? (
          <p className={styles.card__name}>{item.title}</p>
        ) : (
          ''
        )}
        {item && item.description && (
          <p className={styles.card__description}>{item.description}</p>
        )}
      </a>
      {autor && autor.url && <CryptoLink {...autor} />}
    </div>
  )
}
