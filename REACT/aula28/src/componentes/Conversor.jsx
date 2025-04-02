import { useState } from 'react'

function Conversor() {
    let [moeda, setMoeda] = useState("Real")
    let [cotacao, setCotacao] = useState(5.68)
    let [reais, setReais] = useState(0)
    let [conversao, setConversao] = useState(0)

    function Cotacao(){
        let moeda = prompt('Digite o valor em Real?')
        

        setMoeda(moeda)
        setCotacao(cotacao)
        setReais(reais)
        setConversao(moeda / cotacao)
    }
    return(
        <>
        <h1>Conversor de Moedas</h1>
        <h2>Moeda: {moeda}</h2>
        <h2>Cotacao: {cotacao}</h2>
        <button onClick={Cotacao} className='btn'>Pegar Informacoes</button>
        <h1>Conversão:{conversao}</h1>
        </>
    )
}
export default Conversor
