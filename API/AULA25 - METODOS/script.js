let newUser = {
    
    id: 0,
    username: "",
    email: "",
    password: ""
    
}



function NewUser(user){
fetch('https://fakestoreapi.com/users',{
    method:'POST', 
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(user)
}).then(response => {
    console.log(response.status)
    return response.json
    
}).then(user => {
    console.log(user)
    
})}