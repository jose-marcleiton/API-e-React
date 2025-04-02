
import './App.css'
import Primeiro from './componentes/Primeiro'
import Segundo from './componentes/Segundo'
import { useState } from 'react'
import UsuarioInfo from './componentes/UsuarioInfo'
import Conversor from './componentes/Conversor'
import Calculadora from './componentes/Calculadora'


function App() {
  let numero = 0
 
 
  function AdicionarNumero() {
  numero = numero + 1
  console.log(numero)
  }

  let [contador, setContador] = useState(1)


  return (
    <>

      {/* <div className='revisão'>
        <Primeiro />
        <Primeiro />
        <Segundo titulo="texto dinamico do Segundo" texto="esse é um texto do segundo" />
        <Segundo titulo="Cebolinha" />
      </div> */}

      <div className='exemplo'>
      {/* numero não atualiza na tela APENAS RENDERIZA NO CONSOLE */}
        {/* <h1>{numero}</h1>
       <button onClick={AdicionarNumero}>Adicinar +1 ao numero</button> */}


        {/* NUMERO RENDERIZA NA TELA COM O USESTATE */}
       {/* <h2>{contador}</h2>
       <button onClick={() => setContador(contador + 1)}>Adicionar +1 ao contador</button>
       */}

      </div>

      




     

    
    
   
    <Calculadora/>
    
    
    

    </>
  )
}

export default App
