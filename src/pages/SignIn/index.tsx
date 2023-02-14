import { Container, Content } from './styles';
import { User, Lock, Envelope} from 'phosphor-react';
import { Link } from 'react-router-dom';


export function SignIn() {
  return (
    <Container>
      <Content>
        <span className="avatar">
          <User />
        </span>

        <h3>Seja bem vindo</h3>

        <form>
          <div className='field-group'>
            <input type="email" placeholder="E-mail" required/>
          </div>

          <div className='field-group'>
            <input type="password" placeholder="Senha" required/>
          </div>

          <div className="link">
            <Link to="/recover">Esqueceu a senha?</Link>
            <Link to="/signup">Ainda não tenho conta!</Link>
          </div>

          <div className='btn'>
            <button>Acessar</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}
