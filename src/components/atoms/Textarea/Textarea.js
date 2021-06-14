import { Label } from '../Label/Label'
import styles from './Textarea.module.css'

export const Textarea = ({ children, label, ...props }) => (
  <>
    <Label htmlFor={label}>{label}</Label>
    <textarea className={styles.textarea} id={label} {...props}>
      {children}
    </textarea>
  </>
)
