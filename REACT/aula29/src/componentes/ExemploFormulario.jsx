import { useState } from "react";

function ExemploFormulario(){
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    function handleChange(evento) {
        //função para atualizar o estado da var nome
       // setNome(evento.target.value)
        setIdade(Number(evento.target.value))
    }

    function handleClique(evento){
        //setIdade('adicionado por clique')
       setIdade(Number(evento.target.value)+10)
    }


    return(
        <div>
            <h1>Ex Formulario</h1>

            <input type="text" name="nome" id="nome" placeholder="Digite Seu nome" onChange= {handleChange}/>
        <br />
            <input type="number" name=""id="" placeholder="Digite sua idade" onChange={handleClique}/>
            <br />
            <button onClick={handleClique}>Clique para adicionar</button>

            <p>{nome}</p>
            <p>{idade}</p>
        </div>
    )
}
export default ExemploFormulario