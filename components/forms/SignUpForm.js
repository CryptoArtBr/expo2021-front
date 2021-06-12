import Button from "../Button/Button"
import { MainTitle, SectionTitle } from "../typography/Title"
import { FormSection, Input, Label, Checkbox, Textarea } from "./FormComponents"

const SignUpForm = () => {
  return <div className="row">
    <div className="col">
      
      <MainTitle>CRIE SUA CONTA</MainTitle>
      <FormSection>
        <SectionTitle>sobre voce</SectionTitle>
        
        <div className='col-12'>
          <Input label='Nome completo ou artístico'/>
        </div>

        <div className='col-6'>
          <Label>Estado</Label>
          <select>
            <option>pernambuco</option>
            <option>rio de janeiro</option>
          </select>
        </div>

        <div className='col-6'>
          <Label>Cidade</Label>
          <select>
            <option>recife</option>
            <option>nossa senhora do o</option>
          </select>
        </div>
      </FormSection>
      
      <FormSection>
        <SectionTitle>redes sociais</SectionTitle>

        <div className='col-6'>
          <Input label='Instagram'/>
          <Input label='Twitter'/>
        </div>

        <div className='col-6'>
          <Input label='Site'/>
          <Input label='Outro'/>
        </div>
      </FormSection>

      <FormSection>
        <SectionTitle>Sobre sua Arte</SectionTitle>
        
        <h3>Escolha 3 categorias abaixo</h3>

        <div className='col-4'>
          <Checkbox label='3D'/>

          <Checkbox label='Ativismo'/>

          <Checkbox label='Audiovisual'/>

          <Checkbox label='Desenho'/>
        </div>

        <div className='col-4'>
          <Checkbox label='Fotografia'/>

          <Checkbox label='Grafite'/>

          <Checkbox label='Ilustração'/>

          <Checkbox label='Literatura'/>
        </div>

        <div className='col-4'>
          <Checkbox label='Música'/>

          <Checkbox label='Performance'/>

          <Checkbox label='Pintura'/>

          <Checkbox label='Programação'/>
        </div>

      </FormSection>

      <FormSection>
        <SectionTitle>Sua apresentação</SectionTitle>

        <div className='col-12'>
          <Textarea></Textarea>
          <Label>Bio</Label>
        </div>

        <div className='col-12'>
          <Input label='Video apresentação'/>
        </div>
      </FormSection>

      <FormSection>
        <SectionTitle>Acesso</SectionTitle>

        <div className='col-12'>
          <Input type='email' label='email'/>
        </div>
        <div className='col-12'>
          <Input type='password' label='senha'/>
        </div>
      </FormSection>
      <div className='col-12'>
        <Button>concluir cadastro</Button>
      </div>
    </div>
  </div>
}

export default SignUpForm