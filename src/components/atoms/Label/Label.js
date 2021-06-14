import styles from './Label.module.css'

export const Label = ({ children, ...props }) => (
  <label className={styles.label} {...props}>
    {children}
  </label>
)
