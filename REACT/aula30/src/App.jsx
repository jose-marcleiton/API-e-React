import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Revision from './components/Revision'
import FormClass from './components/FormClass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 30 - Eventos de formularios no React</h1>


     <Revision/> 
    <FormClass/>
    </>
    
  
  )
}

export default App
