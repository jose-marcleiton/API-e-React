//fetch.sosumo de API, retorna uma promise
let cepnumerico = 60340110
fetch(`https://viacep.com.br/ws/${cepnumerico}/json/`)
.then((resposta)=>{
    return resposta.json()
})
.then((obj)=>{
    console.log(obj.)
    console.log(`cep: ${obj.cep}`)
    console.log(`logradouro: ${obj.logradouro}`)
    console.log(`complemento: ${obj.complemento}`)
    console.log(`bairro: ${obj.bairro}`)
    console.log(`localidade: ${obj.localidade}`)
    console.log(`estado: ${obj.uf}`)
})
.catch((erro)=>{
    console.log(`o cep passado não foi encontrado: ${cepnumerico}`)
})

