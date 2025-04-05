import { useState } from "react";
import ListaProdutosItens from "./ListaProdutosItens";

function ListaCompras() {
    let [lista, setLista] = useState([])
    let [item, setItem] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // validações para adicionar o item na lista de compras
        // caso o item seja vazio ou repetido, exiba uma mensagem informando o erro
        if(item != '' && !lista.includes(item)){
            setLista([...lista, item]) //atualizar a lista de compras
            // limpar o conteúdo do formulario
            setItem('')
            alert('Item adicionado com sucesso')
        }
        else if (item == '') {
            alert('Preencha o campo de item')
        }
        else {
            alert('Item repetido')
        }
    }

    return(
        <>
            <div>
                <form action="#" onSubmit={handleSubmit}>
                    <input type="text" placeholder="adicionar item" value={item} 
                    onChange={(e)=> setItem(e.target.value)}/>
                    <button type="submit">adicionar</button>
                </form>
            </div>
            <div>

                <ListaProdutosItens listaItens={lista} titulo={'Lista de compras'} />
                
            </div>
        </>
    )
}

export default ListaCompras