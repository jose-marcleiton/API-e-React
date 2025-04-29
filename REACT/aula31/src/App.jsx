import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import ClassesBootstrap5 from './components/ClassesBootstrap5'
import ReactBootstrapComponente from './components/ReactBootstrapComponente'
import Carrosel from './components/Carrosel'
import ListaProdutos from './components/ListaProdutos'



function App() {
  const [count, setCount] = useState(0)
  let produtosTeste = [
    {id: 1, nome: 'Produto 1', preco: 100, img: 'https://placehold.co/600x400', descricao: 'Produto 1 descrição' },
    {id: 2, nome: 'Produto 2', preco: 200, img: 'https://placehold.co/600x400', descricao: 'Produto 2 descrição' },
    {id: 3, nome: 'Produto 3', preco: 300, img: 'https://placehold.co/600x400', descricao: 'Produto 3 descrição' },
    {id: 4, nome: 'Produto 4', preco: 400, img: 'https://placehold.co/600x400', descricao: 'Produto 4 descrição' },
    {id: 5, nome: 'Produto 5', preco: 500, img: 'https://placehold.co/600x400', descricao: 'Produto 5 descrição' },
    {id: 6, nome: 'Produto 6', preco: 600, img: 'https://placehold.co/600x400', descricao: 'Produto 6 descrição' }
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <ClassesBootstrap5/>
      <ReactBootstrapComponente/>
      <Carrosel/>
      
      <ListaProdutos lista={produtosTeste}/>


    </>
  )
}

export default App
