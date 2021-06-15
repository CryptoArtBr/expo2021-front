import { useState } from 'react'
import { Button, Input } from '../../atoms'
import { initialData } from './data'

export const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialData)

  return (
    <div>
      <Input
        label="nome"
        value={formData.username}
        placeholder="seu nome"
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />
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
      <Button onClick={() => onSubmit(formData)}>Registrar</Button>
    </div>
  )
}
