import { useState } from "react";

function FormularioSomar() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)


    function handleClique() {
        let result = num1 + num2
        alert(`o valor da soma e: ${result}`)




    }

    return (
        <div>
            <p>Digite dois numeros para somar e serem exibidos no alert</p>

            <input type="number" placeholder="Digite o primeiro numero" onChange={(event) =>
                setNum1(Number(event.target.value))} />
            <br />

            <input type="number" placeholder="Digite o segundo numero" onChange={(event) =>
                setNum2(Number(event.target.value))} />
            <br />
            <button onClick={handleClique} id="btnSomar">Somar</button>
            
        </div>
    )





}
export default FormularioSomar
