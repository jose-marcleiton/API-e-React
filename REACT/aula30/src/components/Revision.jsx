import { useState } from "react";

function Revision() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('...')

    function handleSubmit(e) {
        //remoção do comportamento padrão do formulario
        e.preventDefault()
        if(nome!= '' && email != '') {
            alert(`nome: ${nome} email: ${email}`)
            alert
            setNome('')
            setEmail = ''
        }else{
            alert('Preencha todos os campos')
        }
    }
    return (
        <>
            <h4>formulário de Revisão</h4>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type="submit">Enviar</button>
            </form>
            <div>
                <h5>Informações enviadas</h5>
                <ul>
                    <li>Nome: {nome}</li>
                    <li>Email: {email}</li>
                </ul>
            </div>
        </>
    )
}
export default Revision