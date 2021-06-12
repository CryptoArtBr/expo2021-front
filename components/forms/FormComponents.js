import styles from './FormComponents.module.css'

export const FormSection = ({ children }) => (
  <div className={`row ${styles.form_section}`}>{children}</div>
)

export const Label = ({ children, ...props }) => (
  <label className={styles.label} {...props}>
    {children}
  </label>
)

export const Input = ({ children, label = '', ...props }) => (
  <>
    <Label htmlFor={label}>{label}</Label>
    <input className={styles.input} id={label} {...props}>
      {children}
    </input>
  </>
)

export const Textarea = ({ children, label, ...props }) => (
  <>
    <Label htmlFor={label}>{label}</Label>
    <textarea className={styles.textarea} id={label} {...props}>
      {children}
    </textarea>
  </>
)

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
