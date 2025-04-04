import { useState } from "react";

function Usuario(){
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')


    function MostrarDados(){
        alert(`Olá: ${nome}, você tem: ${idade} anos`)
    }


    return(
       <div>
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={(event) => setNome(event.target.value)}/>

        <input type="number" name="idade" id="idade"placeholder="Digite sua idade" onChange={(event) => setIdade(event.target.value)}/>
        <button onClick={MostrarDados}>Minhas Informações</button>
       </div> 
    )
}
export default Usuario