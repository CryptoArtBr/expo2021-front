import styles from './Select.module.css'

export const Select = ({ children, label = '', ...props }) => {
  return (
    <>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <select id={label} className={styles.select} {...props}>
        {children}
      </select>
    </>
  )
}

export const Option = ({ children, ...props }) => {
  return (
    <option className={styles.option} {...props}>
      {children}
    </option>
  )
}
