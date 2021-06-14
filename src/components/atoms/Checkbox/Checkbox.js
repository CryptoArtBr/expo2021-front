import styles from './Checkbox.module.css'

export const Checkbox = ({ label = '', ...props }) => {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkbox__box}
        id={label}
        {...props}
        type="checkbox"
      />
      <label className={styles.checkbox__label} htmlFor={label}>
        {label}
      </label>
    </div>
  )
}
