const urlPadrao = 'http://127.0.0.1:8000/api/';


//Grava
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() = 24 * 60 * 60 * 1000 * days);
    document.cookie= name + '=' + value + ';path=/;expires=' + d.toGMTString();
};

//Recupera

function getCookie (name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;

};

//Excluir

function deleteCookie(name) {
    setCookie(name, '', -1);
}


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
    
    fetch(urlPadrao + 'registrar',
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
          window.location.href = "login.html";
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
    
    fetch(urlPadrao + 'login',
     {  method: 'post',
        headers: new Headers({
         'Content-Type': 'application/json',
         'Accept': 'application/json'
         }),
        body: JSON.stringify(object) //Adiciona o Json no Body
     })
     //recebe a resposta do fetch e verifica se foi efetivado
     .then((response) => {
        if(response === 200){
          response.json().then(function(data){
              setCookie('token', data.acessToken, 1)
              setCookie('userData', JSON.stringify(data), 1);
                window.location.href = "index.html";
          })
        }
    })
    //Tratamento de Erro
    .catch(function(erro){
        alert("Erro ao acessar: " + erro);
    })
 }