import { Container } from './styles';
import penaltiGame from '../../assets/gol.jpg'
import avelhaGame from '../../assets/tic-tac.jpg'
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export function Games(){
  return (
    <Container>
      <header>
        <h2></h2>

        <div>
          <button>
            <ArrowLeft size={18} weight="bold" />
          </button>

          <button>
            <ArrowRight size={18} weight="bold" />
          </button>
        </div>
       
      </header>
      <main>
        <div>
          <img src={penaltiGame} alt="" />

          <button>
            Play Now
            <ArrowRight size={18} weight="bold" />
          </button>
        </div>

        <div>
          <img src={avelhaGame} alt="" />

          <button>
            Play Now
            <ArrowRight size={18} weight="bold" />
          </button>
        </div>

      </main>
        
    </Container>
  );
}