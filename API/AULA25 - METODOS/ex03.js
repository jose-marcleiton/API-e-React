// deverá mostrar cada um dos usuários com Nome e Sobrenome como um item da lista não ordenada com id listaUsuarios

// selecionar a ul com getElementById
// criar um elemento li com createElement
// inserir conteúdo no li com elemento.innerHTML
// adicionar o elemento li como filho do elemento com id listaUsuarios


for (let i = 0; i < 5; i++) {
        nameUsers[i] = document.createElement('li')
                    nameUsers[i].innerText = `${users[i].name.firstname} ${users[i].name.lastname}`
                    names.appendChild(nameUsers[i])
                
                }
                
                
            catch (error) {
                console.log(error);
                
            }
         
        
        
        GetAllUsers()