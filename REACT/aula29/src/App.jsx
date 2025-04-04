import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExemploFormulario from './componentes/ExemploFormulario'
import Usuario from './componentes/Usuario'
import FormularioSomar from './componentes/formularioSomar'
import LoginSenhaEmail from './componentes/LoginSenhaEmail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Formulario no React</h1>
    
    
    <ExemploFormulario/>
    <Usuario/>
    <FormularioSomar/>
    <LoginSenhaEmail/>
    </>
  )
}

export default App
