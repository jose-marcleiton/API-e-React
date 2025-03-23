function CardFilme(props) {
    return (
        <>
            <img src={props.imagem} alt="imagem" />
            <h1>{props.titulo}</h1>
            <p><strong>Sinopse:</strong> {props.sinopse}</p>
            <p><strong>ano de lancamento:</strong> {props.ano}</p>

        </>
    )
}
export default CardFilme