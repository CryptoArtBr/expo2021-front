import {useState} from 'react'

import Button from '../Button/Button'
import styles from './UserBox.module.css'

const UserBox = ({open = true}) => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  return (
    <div className={open? styles.user_box : styles.user_box__collapsed}>
      <form className={styles.user_box__form}>
        <formset className={styles.user_box__formset}>
          <label for="name" >Nome:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </formset>
        <formset className={styles.user_box__formset}>
          <label for="pass">Senha:</label>
          <input type="password" id="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
        </formset>
        <Button>entrar</Button>
      </form>
    </div>
  )
}

export default UserBox