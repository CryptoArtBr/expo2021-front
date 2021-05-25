import styles from './Button.module.css'

export default ({children, onClick, type='primary', props}) => {
  if (type === 'nav') return <button className={styles.nav_button} onClick={onClick} {...props}>{children}</button>
  
  if (type === 'secondary') return <button className={styles.secondary_button} onClick={onClick} {...props}>{children}</button>
  
  return <button className={styles.button} onClick={onClick} {...props}>{children}</button>
}