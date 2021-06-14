import styles from './FormSection.module.css'

export const FormSection = ({ children }) => (
  <div className={`row ${styles.form_section}`}>{children}</div>
)
