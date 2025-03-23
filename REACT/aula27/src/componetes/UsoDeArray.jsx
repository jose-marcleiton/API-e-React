function UsoDeArray({array}){
    //[1,2,3,4,5] //array de numeros
    return(
        <>
            <h1>Uso de Array</h1>
            {array.map((item, index) => {
                return <h5 key={index}>isso é: {item}</h5>
            })}

        </>
    )
}
export default UsoDeArray