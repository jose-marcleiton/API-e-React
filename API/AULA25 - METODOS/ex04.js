https://fakestoreapi.com/docs#tag/Carts/operation/deleteCart


// para o formulário de excluir carrinho, crie uma função que capta o valor digitado no input e usa ele para excluir o carrinho correspondente. Essa função será executa quando o botão de excluir for clicado.

async function deleteCarrinho() {
    let id = document.getElementById('carrinho').value;
}
let url = `https://fakestoreapi.com/carts/${id}`;

let resposta = await fetch(url, {
    method: 'DELETE'
})

let status = await resposta.status;
let sucesso = await resposta.json()
console.log(sucesso)
console.log(status)

