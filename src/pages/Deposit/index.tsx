import { useState } from 'react';
import { Plus } from 'phosphor-react';
import Modal from 'react-modal';
import { Footer } from '../../components/Footer';
import { FooterBottom } from '../../components/FototerBottom';
import { Header } from '../../components/Header';

import { Container } from './styles';

export function Deposit() {

  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false);

  function openModal(){
    setDepositModalIsOpen(true);
  }

  function closeModal(){
    setDepositModalIsOpen(false);
  }

  return (
    <Container>
      <Header />
      <section>
        <div>
          <button onClick={openModal}>
            <Plus size={16}/>
            Novo deposito
          </button>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Identificação</th>
              <th>Nome</th>
              <th>Quantia</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>113455e433</td>
              <td>Jonh doe</td>
              <td>4,00 <span>R$</span></td>
            </tr>

            <tr>
              <td>113455e433</td>
              <td>Jonh doe</td>
              <td>2,00 <span>R$</span></td>
            </tr>

            <tr>
              <td>113455e433</td>
              <td>Jonh doe</td>
              <td>3,00 <span>R$</span></td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <Modal
        isOpen={depositModalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
          <form action="" className='depositModal'>
            <input type="text" placeholder='Numero do documento de identificação'/>

            <div>
              <input type="text" placeholder='Nome'/>
              <input type="text" placeholder='Apelido'/>
            </div>

            <input type="text" placeholder='Quantia (BRL)'/>

            <button>Depositar</button>
          </form>

      </Modal>
      <Footer />
      <FooterBottom />
    </Container>
  )
}
