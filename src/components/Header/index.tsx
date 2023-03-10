import { Container } from './styles';
import avatar from '../../assets/avatar.png'
import logo from '../../assets/logo.png'

import { Coins, CurrencyCircleDollar } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header(){
  const navigate = useNavigate();

  return (
    <Container>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>

        <header>
          <ul>
            <li><Link to="/bets">Minhas apostas</Link></li>
            <li><Link to="/saques">Saques</Link></li>
            <button onClick={() => navigate('/deposit')}>
              Depositar
              <CurrencyCircleDollar size={20} />
            </button>
          </ul>
        </header>

        <div>
          <p>
            2,000
            <Coins size={25} weight="duotone" />
          </p>
          <div>
            <Link to="/profile">
              <img src={avatar} alt="profile" />
            </Link>
          </div>
        </div>

        
    </Container>
  );
}