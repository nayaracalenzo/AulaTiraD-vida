import { useContext } from 'react'
import {ThemeContext} from "../../ContextoImagens/ContextoImagens.jsx"
import Gallery from '../../Componentes/Gallery/Gallery.jsx'

const Home = () => {
  const {imgContext} = useContext(ThemeContext)
  const imagensBanner = imgContext.images
  return (
    <div>
      <Gallery images={imagensBanner}/>
      {/* <Section>
        <ColecoesEmDestaque1/>
      </Section>
      <Section>
        <ColecoesEmDestaque2/>
      </Section>
      <Section>
         <ProdutosEmAlta />  
      </Section>
      <OfertaEspecial/> */}
    </div>
  )
}

export default Home
