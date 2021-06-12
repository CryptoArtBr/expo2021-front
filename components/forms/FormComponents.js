import styles from './FormComponents.module.css'

export const FormSection = ({children}) => <div className={`row ${styles.form_section}`}>{children}</div>

export const Label = ({children, ...props}) => <label className={styles.label} {...props}>{children}</label>

export const Input = ({children, label='', ...props}) => <>
  <Label>{label}</Label>
  <input className={styles.input} {...props}>{children}</input>
</>

export const Textarea = ({children, ...props}) => <textarea className={styles.textarea} {...props}>{children}</textarea>

export const Checkbox = ({children, label='', ...props}) => {
  return <div className={styles.checkbox}>
    <input className={styles.checkbox__box} {...props} type='checkbox' />
    <label className={styles.checkbox__label}>{label}</label>
  </div>
}
