{/* CRIE UM COMPONENTE QUE RENDERIZE O NOME E O EMAIL DO USUARIO(SEM USAR PROPS) */ }
{/* CRIE UM BOTÃO DENTRO DESSE COMPONENTE QUE PEÇA AS INFORMAÇÕES DO USUARIO */ }
{/* VOCÊ VAI PRECISAR DE DUAS VARIÁVEIS COM ESTADO CONTROLADO, UMA PARA O NOME E OUTRA PARA O EMAIL */ }

import { useState } from 'react'

function UsuarioInfo() {
    let [nome, setNome] = useState('')
    let [email, setEmail] = useState('')


    function PedirInformacoes() {
        let nomeUsuario = prompt("Digite seu nome")
        let emailUsuario = prompt("Digite seu email")

        setNome(nomeUsuario)
        setEmail(emailUsuario)
    }
    return (
        <>
            <h1>Nome: {nome}</h1>
            <h1>Email: {email}</h1>
            <button onClick={PedirInformacoes}>Pegar Informacoes</button>



        </>
    )
    return(
        <>
        <h2>Nome:{nome}</h2>
        <h2>Email:{email}</h2>
        <button onClick={() => {
            let nomeUsuario = prompt("Digite seu nome")
            let emailUsuario = prompt("Digite seu email")

            setNome(nomeUsuario)
            setEmail(emailUsuario)
        }}>Pegar Informacoes</button>
        
        
        </>
    )
}




export default UsuarioInfo