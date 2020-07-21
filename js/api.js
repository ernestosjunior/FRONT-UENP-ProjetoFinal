const url_padrao = 'http://127.0.0.1:8000/api/',


registrarUsuario = () =>{
    //Faz a leitura dos inputs
    let nome = document.getElementById("first_name").value;
    let sobrenome = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    //Cria o Json
    var object = {
        "name" : nome,        
        "sobrenome" : sobrenome,
        "email": email,
        "password":senha
    }

    fetch('http://localhost:8000/api/registrarusuario',
     {  method: 'post',
        mode: 'no-cors',
        headers: new Headers({
         'Content-Type': 'application/json',
         'Accept': 'application/json'
         }),
        body: JSON.stringify(object) //Adiciona o Json no Body
     })
     //recebe a resposta do fetch e verifica se foi efetivado
     .then((response) => {
        if(response.ok ){
          alert("Registro criado com sucesso!");
          window.location.href = "index.html";
        }
    })
    //Tratamento de Erro
    .catch(function(erro){
        alert("Erro ao criar o registro: " + erro);
    })
 }

 

  
