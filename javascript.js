function logar(){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    
    if(usuario.value == "usuario" && senha.value == "12345"){
    alert("Usuário autenticado!");
    }
    else{
      alert("Usuário ou senha inválidos!");
    }
  }