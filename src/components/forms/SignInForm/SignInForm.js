import { Button, FormSection, Input } from '../../atoms'

export const SignInForm = () => {
  return (
    <div className="row">
      <div className="col-6">
        <FormSection>
          <Input label="nome" />
          <Input label="senha" type="password" />
          <Button>Entrar</Button>
        </FormSection>
      </div>
    </div>
  )
}
