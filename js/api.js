const url_padrao = 'http://127.0.0.1:8000/api/';


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
 
consultarPessoa = () =>{     

    let c = document.getElementById("cpfcnpj").value;

    fetch(url_padrao + 'consultarpessoa/' + c,
      {    method: 'get',
           headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }),
      })
      //Verifica o retorno do servidor
      .then(response => {
          if(!response.ok){
              throw Error("Erro");    
          }
          return response.json();
      })
      //Preeche os dados do aluno nos inputs
      .then(data => {
          console.log(data);
          document.querySelector('#id').append(data.id);
          document.querySelector('#nomeSobrenome').append(data.name, data.sobrenome);
          document.querySelector('#sexo').append(data.sexo);
      })
      //trata exceções
      .catch(function(erro){
          alert("Erro: " + erro);
      });
  };
