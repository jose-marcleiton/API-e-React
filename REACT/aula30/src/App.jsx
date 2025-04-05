import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Revision from './components/Revision'
import FormClass from './components/FormClass'
import ListaComprasEx1 from './components/ListaComprasEx1'
import ListaCompras from './components/ListaCompras'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 30 - Eventos de formularios no React</h1>

      
     {/* <Revision/> 
    <FormClass/> */}
    

    
     <ListaComprasEx1/>
     <listaCompras/>
    </>
    
  
  )
}


export default App
