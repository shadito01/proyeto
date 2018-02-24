
const usuario = document.querySelector("#usuariotext");
const Contraseña = document.querySelector("#passwordtext");
var Listenerusers = firebase.database().ref().child("login");
var login = new Array();
var NuevoIdlogin = 1;

function ValidarInicioDeSesion(){
if (usuario.value == ""){
usuario.focus();
return;
}else{
if (Contraseña.value == ""){
Contraseña.focus();
return;
}else{}
}

var inicarsesion = ValidarUsuario();
if(inicarsesion){
location='profesor.html';
}else{
  alert("Contraseña o Usuario Incorrectos");
} 
  
}

Listenerusers.on('value', (snapshot) => {
    //Conseguir último ID
    NuevoIdlogin = snapshot.numChildren() + 1;
    console.log(NuevoIdlogin);
    login = new Array(snapshot.numChildren());

    for (var i = 1; i < NuevoIdlogin; i++) {
        login[i] = new Array(3);
        login[i][0] = snapshot.child(i).child("usuario").val;
        login[i][1] = snapshot.child(i).child("contraseña").val();
        login[i][2] = snapshot.child(i).child("email").val();
    }
});

function ValidarUsuario(){
var usuarioincorrecto = true;

for (var i = 1; i < NuevoIdlogin; i++){
  if(usuario.value == login[i][0].value){
    usuarioincorrecto = false;
    console.log("user correct");
  }
}

var contraseñaincorrecto = true;

for (var i = 1; i < NuevoIdlogin; i++){
  if(Contraseña.value == login[i][1].value){
    contraseñaincorrecto = false;
    console.log("contra corr");
  }
}

if(!usuarioincorrecto && !contraseñaincorrecto){
  return true;
}else{
return true;
}
}

