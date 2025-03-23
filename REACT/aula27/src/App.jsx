import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteSimples from './componetes/ComponenteSimples'
import ComponenteComProps from './componetes/ComponenteComProps'
import CardFilme from './componetes/CardFilme'
import PropsDesestruturado from './componetes/PropsDesestruturado'
import DemonstracaoIMC from './componetes/DemonstracaoIMC'
import UsoDeArray from './componetes/UsoDeArray'
import ListaDeProdutos from './componetes/ListaDeProdutos'

function App() {
  let objetoFilme = {
    imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg',
    titulo: 'O Poderoso Chefão',
    sinopse: 'texto da sinopse',
    ano: '1972'
  }
  let numeros = [1, 2, 500, 4, 5, 6, 7, 8, 9, 10]
  let coisas = ['casa', 'carro', 'moto', 'bicicleta', 'aviao', 'navio', 'trem', 'onibus', 'metro', 'barco']


  
  return (
    <>
      <h1>Segunda Aula de React</h1>
      <ul>
        <li>Criação de componentes com props</li>
        <li>Criação de componentes com filhos</li>
        <li>Criação de componentes com estado</li>
      </ul>
      <ComponenteSimples />

      <ComponenteComProps nome='cleitinho' idade='22' email='cleitinho@example.com' />

      <ComponenteComProps nome='Maria' idade='25' email='maria@example.com' />

      <CardFilme titulo='O Poderoso Chefão'
        imagem='https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg'

        sinopse='Don Vito Corleone (Marlon Brando) é o chefe de uma "família" de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo "justiça", vingança na verdade contra membros de uma quadrilha, que espancaram barbaramente sua filha por ela ter se recusado a fazer sexo para preservar a honra...' ano='1972' />

      <CardFilme imagem={objetoFilme.imagem} titulo={objetoFilme.titulo} sinopse={objetoFilme.sinopse} ano={objetoFilme.ano} />

      <PropsDesestruturado um='1' dois='2' tres='3' />

      <DemonstracaoIMC altura={1.90} peso={85} sexo='masculino' idade={28} IMC />

      <DemonstracaoIMC altura={1.54} peso={48} sexo='Feminino' idade={24} IMC />

      <UsoDeArray array={numeros} />
      <UsoDeArray array={coisas} />

      <ListaDeProdutos lista = {[{id: 1, nome: 'Notebook', preco:999.99, quantidade: 5},{id: 2, nome: 'Geladeira', preco: 2.000, quantidade: 4},{id: 3, nome: 'Folgão', preco: 800, quantidade: 2},{id: 4, nome: 'Microondas', preco:280, quantidade: 3}]} />


    </>

  )
}

export default App
