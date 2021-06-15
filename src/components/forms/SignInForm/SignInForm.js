import { useState } from 'react'
import { Button, Input } from '../../atoms'
import { initialData } from './data'

export const SignInForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialData)

  return (
    <div>
      <Input
        label="email"
        value={formData.email}
        type="email"
        placeholder="seu email"
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />
      <Input
        label="senha"
        value={formData.password}
        type="password"
        placeholder="senha"
        onChange={(e) =>
          setFormData({
            ...formData,
            password: e.target.value,
          })
        }
      />
      <Button onClick={() => onSubmit(formData)}>Entrar</Button>
    </div>
  )
}
