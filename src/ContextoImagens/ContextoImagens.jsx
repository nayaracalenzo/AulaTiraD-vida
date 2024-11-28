import { createContext, useState } from "react"
import slide1 from '../assets/tenisgallery.png'
import slide2 from '../assets/tenisgallery.png'
import slide3 from '../assets/tenisgallery.png'
import tenis from "../assets/tenisCard.png"


const imagensContexto = {
  images:[slide1, slide2, slide3],
  // imagesdetalhe:[sapatoAmarelo, sapatoBege],
  cards: [
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    },
    {
      categoria:"Tenis",
      desc: "K-Swiss V8 - Masculino",
      src: tenis,
      preco: 200,
      precoDesconto: 100
    }
  ]
}

const ThemeContext = createContext();



// eslint-disable-next-line react/prop-types
const ContextoImagens = ({children}) => {
 const [imgContext, setImgContext] = useState(imagensContexto)
  return (
    <>
      <ThemeContext.Provider value={{imgContext, setImgContext}}>
      {children}
    </ThemeContext.Provider>
    </>
  )
}

export {ContextoImagens , ThemeContext } 
