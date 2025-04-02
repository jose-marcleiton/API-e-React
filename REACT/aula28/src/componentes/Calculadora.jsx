import { useState } from "react";

function Calculadora() {
    let [num1, setNum1] = useState('')

    function Adicionar(numeroEscolhido) {
        let texto = `Muito bom! Você escolheu o número ${numeroEscolhido}`

        setNum1(numeroEscolhido)
    }
    return (
        <>


            <div className="numeros">
                <h1>Calculadora</h1>
                <h5>{num1}</h5>
                <button onClick={() => Adicionar(1)}>1</button>
                <button onClick={() => Adicionar(2)}>2</button>
                <button onClick={() => Adicionar(3)}>3</button>
                <button onClick={() => Adicionar(4)}>4</button>
                <button onClick={() => Adicionar(5)}>5</button>
                <button onClick={() => Adicionar(6)}>6</button>
                <button onClick={() => Adicionar(7)}>7</button>
                <button onClick={() => Adicionar(8)}>8</button>
                <button onClick={() => Adicionar(9)}>9</button>
                <button onClick={() => Adicionar(0)}>0</button>

                
            </div>
        </>

    )
}
export default Calculadora
