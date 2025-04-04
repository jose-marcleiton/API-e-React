import { useState } from "react";
//se o email ou senha estiverem vazios ou incorretos, exibir um alerta pedindo para preencher os campos corretamente e insforma que o acesso foi negado
//se o email e senha estiverem corretos, exibir um alerta informando que o acesso foi permitido e fazer a limpeza dos campos
function LoginSenhaEmail() {
    const senhaCorreta = '1234'
    const emailCorreto = 'cleiton@gatolaranja.com'

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function handleSubmit(evento) {
        evento.preventDefault()
        if (email == emailCorreto && senha == senhaCorreta) {
            alert('Acesso concedido')
            //limpar os campos  
            setEmail('')
            setSenha('')
        }
        else if (email == '' || senha == '') {
            alert('Preencha os campos corretamente')
        }

        else {
            alert('Acesso negado, email ou senha errados')

        }
    }


    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value={email} 
                onChange={(evento) => 
                setEmail(evento.target.value)} />
            <br />
                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha" value={senha} onChange={(evento) => 
                    setSenha(evento.target.value)} />
                <br />
                <button type="submit">Entrar</button>
            </form>

        </div>
    )









}
export default LoginSenhaEmail