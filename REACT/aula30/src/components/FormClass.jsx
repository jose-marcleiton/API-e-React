import { useState } from "react";
function FormClass() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [users, setUsers] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if(email != '' && password == confirmPassword ) {
            setUsers([...users,email])
            alert('Usuario cadastrado com sucesso')

            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }
        else if(email == ''){
            alert('Preencha o campo email')
        }
        else{
            alert('senhas diferentes')
        }
       
    }
    return (
        <>
    <h2>Formulário</h2>
    <form className="conteiner" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Senha:</label>
        <input type="text" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label htmlFor="confirmPassword">Confirme sua senha:</label>
        <input type="text" placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <br />
        <button type="submit">Cadastrar</button>


    </form>
    <ul>
        {users.map((user, index) => (
            <li key={index}>{user}</li>
        ))}
    </ul>

        </>
    )
}
export default FormClass