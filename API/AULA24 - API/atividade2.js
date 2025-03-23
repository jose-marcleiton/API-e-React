// acesse the cat api e leia a documentação :)
// utilize o end point para buscar uma imagem aleatoria de gato
// mostre apenas a URL do objeto resposta no console

let container = document.getElementById('containerImagem')


let url = 'https://api.thecatapi.com/v1/images/search'
fetch(url)
.then((resposta)=>{
    return resposta.json()
})
.then ((arrayobjeto)=>
{
    console.log(arrayobjeto[0].url)
    
})

.then(url =>{
    let imagem = document.createElement('img')
    imagem.src = url
    imagem.alt = 'imagem de um gato'
    containerImagem.appendChild(imagem)
})
.catch((erro)=>{
    console.log(erro)
})
