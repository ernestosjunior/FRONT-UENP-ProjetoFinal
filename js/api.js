const url_padrao = 'http://127.0.0.1:8000/api/';


registrarUsuario = () => {
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
    };
    
    fetch(url_padrao + 'registrar',
     {  method: 'post',
        mode: 'no-cors',//////////////////////////////
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
 };

 registrarPessoa = () =>{
    //Faz a leitura dos inputs
    let nome = document.getElementById("name").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let cpfcnpj = document.getElementById("cpfcnpj").value;
    let sexo = document.getElementById("sexo").value;

    //Cria o Json
    var object = {
        "name" : nome,        
        "sobrenome" : sobrenome,
        "cpfcnpj": cpfcnpj,
        "sexo": sexo
    };
    
    fetch(url_padrao + 'cadastrarpessoa',
     {  method: 'post',
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
 };

 login = () =>{
    //Faz a leitura dos inputs
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    //Cria o Json
    var object = {
        "email" : email,        
        "password" : senha,
    };
    
    fetch(url_padrao + 'login',
     {  method: 'post',
        headers: new Headers({
         'Content-Type': 'application/json',
         'Accept': 'application/json'
         }),
        body: JSON.stringify(object) //Adiciona o Json no Body
     })
     //recebe a resposta do fetch e verifica se foi efetivado
     .then((response) => {
        if(response.ok ){
          alert("Login efetuado!");
          window.location.href = "cadastrarpessoa.html";
        }
    })
    //Tratamento de Erro
    .catch(function(erro){
        alert("Erro ao acessar: " + erro);
    })
 }

 cadastrarDebito = () =>{
    //Faz a leitura dos inputs
    let idPeople = document.getElementById("id_people").value;
    let cpfcnpj = document.getElementById("cpfcnpj").value;
    let credor = document.getElementById("credor").value;
    let valor = document.getElementById("valor").value;
    let status = document.getElementById("status").value;

    //Cria o Json
    var object = {
        "id_people" : idPeople,        
        "cpfcnpj" : cpfcnpj,
        "credor": credor,
        "valor": valor,
        "status": status
    };
    
    fetch(url_padrao + 'cadastrardebito',
     {  method: 'post',
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
 };
