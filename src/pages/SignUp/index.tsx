import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { AppleLogo, FacebookLogo, GoogleLogo, InstagramLogo, User } from 'phosphor-react';

export function SignUp()  {

  return (
    <Container>
      <Content>
        <span className="avatar">
          <User />
        </span>

        <h3>Registra-se</h3>

        <form>

          <div className='field-group'>
            <input type="text" placeholder="Nome completo" required/>
          </div>

          <div className='field-group'>
            <input type="date" placeholder="Data" required/>
          </div>

          <div className='field-group'>
            <input type="email" placeholder="E-mail" required/>
          </div>

          <div className='field-group'>
            <input type="password" placeholder="Senha" required/>
          </div>

          <label>
            <input type="checkbox" />
            Li e concordo com os termos de uso.
					</label>
          
          <div className='btn'>
            <button>Cadastra-se</button>
          </div>

          <ul>
            <li><a href=""><FacebookLogo size={25} /></a></li>
            <li><a href=""><InstagramLogo size={25} /></a></li>
            <li><a href=""><GoogleLogo size={25} /></a></li>
            <li><a href=""><AppleLogo size={25} /></a></li>
          </ul>

          <div className="link">
            <Link to="#"></Link>
            <Link to="/signin">Já tenho conta? Login</Link>
          </div>

        </form>
      </Content>
    </Container>
  );
}

