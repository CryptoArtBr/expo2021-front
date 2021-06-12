import { Label } from '../Label/Label'
import styles from './Input.module.css'

export const Input = ({ children, label = '', ...props }) => (
  <>
    <Label htmlFor={label}>{label}</Label>
    <input className={styles.input} id={label} {...props}>
      {children}
    </input>
  </>
)
