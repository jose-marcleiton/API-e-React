import { useState } from "react";


// crie um formulário que permita o usuário adicionar itens em uma lista de compras. 
// Não é possível inserir um item vazio ou um item repetido. Caso isso aconteça devrá ser mostrada uma mensagem informando o erro.
// ao clicar em adicionar, o item deverá ser adicionado na lista de compras que será renderizada abaixo do formulário com  a atualização. 

function ListaComprasEx1() {
    let [lista, setLista] = useState([])
    let [item, setItem] = useState('')



    function handleSubmit(e) {
        e.preventDefault()
        if (item != '' && !lista.includes(item)) {
            setLista([...lista, item]) //atualização da lista
            //limpar o conteudo da lista
            setItem('')
            alert('Item adicionado com sucesso')
        }
        else if (item == '') {
            alert('Preencha o campo item')
        }
        else {
            alert('Item repetido')
        }

        return (
            <>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Adicione item" value={item}
                            onChange={(e) => setItem(e.target.value)} />
                        <button type="submit">Adicionar</button>
                    </form>
                </div>


                <div>
                    <ul>
    {/* renderização da lista */}
                        {lista.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>

                </div>



            </>

        )
    }
}
export default ListaComprasEx1