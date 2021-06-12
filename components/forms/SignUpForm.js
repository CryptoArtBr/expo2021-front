import Button from "../Button/Button"
import Title from "../typography/Title"

const SignUpForm = () => {
  return <div>
    <Title>CRIE SUA CONTA</Title>
    <div>
      <h2>sobre voce</h2>
      
      <label>Nome completo ou artístico</label>
      <input></input>

      <label>Estado</label>
      <select>
        <option>pernambuco</option>
        <option>rio de janeiro</option>
      </select>

      <label>Cidade</label>
      <select>
        <option>recife</option>
        <option>nossa senhora do o</option>
      </select>
    </div>
    
    <div>
      <h2>redes sociais</h2>

      <label>Instagram</label>
      <input />

      <label>Twitter</label>
      <input />

      <label>Site</label>
      <input />

      <label>Outro</label>
      <input />
    </div>

    <div>
      <h2>Sobre sua Arte</h2>
      
      <h3>Escolha 3 categorias abaixo</h3>

      
      <label>3D</label>
      <input type='checkbox' />

      <label>Ativismo</label>
      <input type='checkbox' />

      <label>Audiovisual</label>
      <input type='checkbox' />

      <label>Desenho</label>
      <input type='checkbox' />

      <label>Fotografia</label>
      <input type='checkbox' />

      <label>Grafite</label>
      <input type='checkbox' />

      <label>Ilustração</label>
      <input type='checkbox' />

      <label>Literatura</label>
      <input type='checkbox' />

      <label>Música</label>
      <input type='checkbox' />

      <label>Performance</label>
      <input type='checkbox' />

      <label>Pintura</label>
      <input type='checkbox' />

      <label>Programação</label>
      <input type='checkbox' />

    </div>

    <div>
      <h2>Sua apresentação</h2>

      <label>Bio</label>
      <textarea />

      <label>Video apresentação</label>
      <input />
    </div>

    <div>
      <h2>Acesso</h2>

      <label>email</label>
      <input type='email' />

      <label>senha</label>
      <input type='password'/>
    </div>
    <Button>concluir cadastro</Button>
  </div>
}

export default SignUpForm