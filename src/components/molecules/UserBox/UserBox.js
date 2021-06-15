import styles from './UserBox.module.css'

export const UserBox = ({ open = true, children }) => {
  return (
    <div className={open ? styles.user_box : styles.user_box__collapsed}>
      {children}
    </div>
  )
}
