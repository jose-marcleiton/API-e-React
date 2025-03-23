function DemonstracaoIMC({altura, peso, sexo, idade}) {
    return (
        <div>
            <h1>Calculo do IMC</h1>
            <h5>altura: {altura} m</h5>
            <h5>peso: {peso} kg</h5>
            <h5>sexo: {sexo}</h5>
            <h5>idade: {idade} anos</h5>
            <h5>IMC: {(peso / (altura) ** 2)}</h5>
        </div>
    )
}
export default DemonstracaoIMC