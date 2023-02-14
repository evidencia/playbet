import { Footer } from '../../components/Footer';
import { FooterBottom } from '../../components/FototerBottom';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <Header/>
      <section>
        <form action="">
        <p>Informações pessoais</p>

          <div>
            <input type="text" value="Evidencia David"/>
            <input type="text" value="evidenciadavid@gmail.com"/>
          </div>
    
          <div>
            <input type="text" value="20-12-2000"/>
            <input type="password" value="ab12cd34fg"/>
          </div>  


          <button>Salvar</button>  
        </form>
      </section>
      <Footer/>
      <FooterBottom/>
    </Container>
  );
}
