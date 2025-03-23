function ListaDeProdutos({lista}){
    return(
        <div className="Container">
        <h1>Lista de Produtos</h1>
    
    {lista.map((produto) => (
        <div className="card" key={produto.id}>
            <h3>Nome: {produto.nome}</h3>
            <h3>Preço: {produto.preco}</h3>
            <h3>Quantidade: {produto.quantidade}</h3>
        </div>
    ))}


        </div>
    )
}
export default ListaDeProdutos