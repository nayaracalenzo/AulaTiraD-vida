import Header from '../Componentes/Header/Header';
import Footer from '../Componentes/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Rotas from '../Rotas/Rotas.jsx'
import {ContextoImagens} from '../ContextoImagens/ContextoImagens.jsx';
const Layout = () => {
  return (
    <>
    
      <BrowserRouter>
      <ContextoImagens>
        <Header />
        <Rotas />
        <Footer />
        </ContextoImagens>
      </BrowserRouter>
    </>
  );
};

export default Layout;
