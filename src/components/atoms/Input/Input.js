import ExclamationBang from '../SVG/ExclamationBang'
import { Label } from '../Label/Label'
import styles from './Input.module.css'

export const Input = ({ children, label = '', error, ...props }) => (
  <div className={`${styles.input_wrapper}`}>
    <Label htmlFor={label}>{label}</Label>
    <input
      className={`${styles.input} ${error ? styles.input_error : ''}`}
      id={label}
      {...props}
    />
    {error ? <ExclamationBang /> : null}
  </div>
)
