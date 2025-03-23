let Usuario = {
    id: 0,
    nome: "",
    email: "",
    senha: ""

}
async function GetAllUsers() {
    try {
        let response = await fetch('https://fakestoreapi.com/users')
        let users = await response.json()
        console.log(users);
        
    } catch (error) {
        console.log(error);
        
    }
}  
GetAllUsers()



