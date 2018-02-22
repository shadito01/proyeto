
const idestudiante = document.querySelector("#idestudiante");
const nombre = document.querySelector("#NOMBRE");
const apellido = document.querySelector("#APELLIDO");
const nombretutor = document.querySelector("#nombretutor");
const telefono = document.querySelector("#tel");
const direccion = document.querySelector("#direccion");
const grado = document.querySelector("#select");
const fechanac = document.querySelector("#date");
const edad = document.querySelector("#edad");

//Fila1
const columna1f1 = document.querySelector("#columna1f1");
const columna2f1 = document.querySelector("#columna2f1");
const columna3f1 = document.querySelector("#columna3f1");
const columna4f1 = document.querySelector("#columna4f1");
const columna5f1 = document.querySelector("#columna5f1");
const columna6f1 = document.querySelector("#columna6f1");
const columna7f1 = document.querySelector("#columna7f1");

//Fila2
const columna1f2 = document.querySelector("#columna1f2");
const columna2f2 = document.querySelector("#columna2f2");
const columna3f2 = document.querySelector("#columna3f2");
const columna4f2 = document.querySelector("#columna4f2");
const columna5f2 = document.querySelector("#columna5f2");
const columna6f2 = document.querySelector("#columna6f2");
const columna7f2 = document.querySelector("#columna7f2");

//Fila3
const columna1f3 = document.querySelector("#columna1f3");
const columna2f3 = document.querySelector("#columna2f3");
const columna3f3 = document.querySelector("#columna3f3");
const columna4f3 = document.querySelector("#columna4f3");
const columna5f3 = document.querySelector("#columna5f3");
const columna6f3 = document.querySelector("#columna6f3");
const columna7f3 = document.querySelector("#columna7f3");

//Fila4
const columna1f4 = document.querySelector("#columna1f4");
const columna2f4 = document.querySelector("#columna2f4");
const columna3f4 = document.querySelector("#columna3f4");
const columna4f4 = document.querySelector("#columna4f4");
const columna5f4 = document.querySelector("#columna5f4");
const columna6f4 = document.querySelector("#columna6f4");
const columna7f4 = document.querySelector("#columna7f4");

//Fila5
const columna1f5 = document.querySelector("#columna1f5");
const columna2f5 = document.querySelector("#columna2f5");
const columna3f5 = document.querySelector("#columna3f5");
const columna4f5 = document.querySelector("#columna4f5");
const columna5f5 = document.querySelector("#columna5f5");
const columna6f5 = document.querySelector("#columna6f5");
const columna7f5 = document.querySelector("#columna7f5");

var pagina = 0; //P�gina por defecto...
var NuevoId = 1;

const botonagregar = document.querySelector("#botonagregar");
const paginaanterior = document.querySelector("#paginaanterior");
const paginasiguiente = document.querySelector("#siguientepagina");
const labelpage = document.querySelector("#labelpage");
const rellenar = document.querySelector("#rellenar");
const nuevoestudiante = document.querySelector("#nuevoestudiante");
const btnactualizar = document.querySelector("#btnactualizar");
const idactualizar = document.querySelector("#idactualizar");

//Saber si se est� creando o actualizando
var Actualizar = false;

var firebaseChanguinref = firebase.database().ref().child("estudiantes");
var estudiantes = new Array();

document.addEventListener('DOMContentLoaded', function() {
        if(pagina == 0){
        paginaanterior.disabled = true;
        }else{    
            paginaanterior.disabled = false;
        }

    //Revisar que en la pr�xima p�gina halla datos para mostrar, de lo contrario desactivar el bot�n de "P�gina siguiente"...
    if(((NuevoId-1) - ((pagina+1)*5)) > 0){
    paginasiguiente.disabled = false;
    }else{
    paginasiguiente.disabled = true;
    }

    labelpage.textContent = "-  " + (pagina+1) + "  -"; //cargar p�gina

        //Calcular edad
    var test = "";
    test = fechanac.value;
    test = test.substring(0, 4);
    var d = new Date();
    var n = d.getFullYear();

    var number1 = 1;
    number1 = n;
    var number2 = 2;
    number2 = test;

    var number3 = number1 - number2;

    edad.textContent = number3;

}, false);

firebaseChanguinref.on('value', (snapshot) => {
    
    //Asignar en base a la p�gina
    var fivepage = pagina*5;
    
    //Conseguir �ltimo ID
    NuevoId = snapshot.numChildren()+1;
    console.log(NuevoId);
    estudiantes = new Array(snapshot.numChildren());

    for (var i = 1; i < NuevoId; i++) {
        estudiantes[i] = new Array(6);          
        estudiantes[i][0] = snapshot.child(i).child("nombre").val();
        estudiantes[i][1] = snapshot.child(i).child("apellido").val();
        estudiantes[i][2] = snapshot.child(i).child("nombre-tutor").val();
        estudiantes[i][3] = snapshot.child(i).child("telefono").val();
        estudiantes[i][4] = snapshot.child(i).child("direccion").val();
        estudiantes[i][5] = snapshot.child(i).child("grado").val();
    }

    //Vaciar Columnas
    for (var i = 1; i < 6; i++) {
        for (var k = 1; k < 8; k++) {
            window['columna' + k + 'f'+ i].textContent = "";
        }
    }

    var normalcounter = 1;
    for (var i = 1; i < 6; i++) {
        if((estudiantes.length-1) >= (i+fivepage)){
        for (var k = 0; k < 7; k++) {
            
             window['columna'+(k+1)+'f'+normalcounter].textContent = estudiantes[i+fivepage][k];
        }
        if(window['columna1f'+normalcounter].textContent != ""){
        window['columna7f'+normalcounter].textContent = (i+fivepage);
        }else{
        }
        }else{
        }
        //para ir sumando las filas...
        normalcounter++;
    }

    //Revisar que en la pr�xima p�gina halla datos para mostrar, de lo contrario desactivar el bot�n de "P�gina siguiente"...
    if(((NuevoId-1) - ((pagina+1)*5)) > 0){
    paginasiguiente.disabled = false;
    }else{
    paginasiguiente.disabled = true;
    }

    });

botonagregar.addEventListener("click", function () {
    const textToSave = nombre.value+" "+apellido.value;
    console.log("Guardando nuevo usuario...");

    const IDAdder = NuevoId;

    //C�digo para agregar estudiante
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child(IDAdder).child("nombre").set(nombre.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child(IDAdder).child("apellido").set(apellido.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child(IDAdder).child("nombre-tutor").set(nombretutor.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child(IDAdder).child("telefono").set(telefono.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child(IDAdder).child("direccion").set(direccion.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child(IDAdder).child("grado").set(grado.value);

    var firebaseref = firebase.database().ref();
    firebaseref.child("estudiantes").child(IDAdder).child("fecha_nac").set(fechanac.value);

    idestudiante.value = IDAdder;
        //Calcular edad
    var test = "";
    test = fechanac.value;
    test = test.substring(0, 4);
    var d = new Date();
    var n = d.getFullYear();

    var number1 = 1;
    number1 = n;
    var number2 = 2;
    number2 = test;

    var number3 = number1 - number2;

    edad.textContent = number3;

})

paginaanterior.addEventListener("click", function () {
    //Reducir una p�gina
    pagina--;
    //Si la pagina es la 1, desabilitar el boton de pagina anterior
    if(pagina == 0){
        paginaanterior.disabled = true;
    }else{    
    }

     labelpage.textContent = "-  " + (pagina+1) + "  -";

    //Asignar en base a la p�gina
    var fivepage = pagina*5;

    //Vaciar Columnas
    for (var i = 1; i < 6; i++) {
        for (var k = 1; k < 8; k++) {
            window['columna' + k + 'f'+ i].textContent = "";
        }
    }

    var normalcounter = 1;
    for (var i = 1; i < 6; i++) {
        if((estudiantes.length-1) >= (i+fivepage)){
        for (var k = 0; k < 7; k++) {
            
             window['columna'+(k+1)+'f'+normalcounter].textContent = estudiantes[i+fivepage][k];
        }
        if(window['columna1f'+normalcounter].textContent != ""){
        window['columna7f'+normalcounter].textContent = (i+fivepage);
        }else{
        }
        }else{
        }
        //para ir sumando las filas...
        normalcounter++;
    }

    //Revisar que en la pr�xima p�gina halla datos para mostrar, de lo contrario desactivar el bot�n de "P�gina siguiente"...
    if(((NuevoId-1) - ((pagina+1)*5)) > 0){
    paginasiguiente.disabled = false;
    }else{
    paginasiguiente.disabled = true;
    }
})



paginasiguiente.addEventListener("click", function () {
    //Reducir una p�gina
    pagina++;
    //Si la pagina es la 1, desabilitar el boton de pagina anterior
    if(pagina > 0){
        paginaanterior.disabled = false;
    }else{    
    }

    labelpage.textContent = "-  " + (pagina+1) + "  -";

        //Asignar en base a la p�gina
    var fivepage = pagina*5;

    //Vaciar Columnas
    for (var i = 1; i < 6; i++) {
        for (var k = 1; k < 8; k++) {
            window['columna' + k + 'f'+ i].textContent = "";
        }
    }

    var normalcounter = 1;
    for (var i = 1; i < 6; i++) {
        if((estudiantes.length-1) >= (i+fivepage)){
        for (var k = 0; k < 7; k++) {
            
             window['columna'+(k+1)+'f'+normalcounter].textContent = estudiantes[i+fivepage][k];
        }
        if(window['columna1f'+normalcounter].textContent != ""){
        window['columna7f'+normalcounter].textContent = (i+fivepage);
        }else{
        }
        }else{
        }
        //para ir sumando las filas...
        normalcounter++;
    }
    
    //Revisar que en la pr�xima p�gina halla datos para mostrar, de lo contrario desactivar el bot�n de "P�gina siguiente"...
    if(((NuevoId-1) - ((pagina+1)*5)) > 0){
    paginasiguiente.disabled = false;
    }else{
    paginasiguiente.disabled = true;
    }

})


rellenar.addEventListener("click", function () {
   
    ////Rellenar Tabla
       //Asignar en base a la p�gina
    var fivepage = pagina*5;

    //Vaciar Columnas
    for (var i = 1; i < 6; i++) {
        for (var k = 1; k < 8; k++) {
            window['columna' + k + 'f'+ i].textContent = "";
        }
    }

    var normalcounter = 1;
    for (var i = 1; i < 6; i++) {
        if((estudiantes.length-1) >= (i+fivepage)){
        for (var k = 0; k < 7; k++) {
            
             window['columna'+(k+1)+'f'+normalcounter].textContent = estudiantes[i+fivepage][k];
        }
        if(window['columna1f'+normalcounter].textContent != ""){
        window['columna7f'+normalcounter].textContent = (i+fivepage);
        }else{
        }
        }else{
        }
        //para ir sumando las filas...
        normalcounter++;
    }

    //Revisar que en la pr�xima p�gina halla datos para mostrar, de lo contrario desactivar el bot�n de "P�gina siguiente"...
    if(((NuevoId-1) - ((pagina+1)*5)) > 0){
    paginasiguiente.disabled = false;
    }else{
    paginasiguiente.disabled = true;
    }
    
})

nuevoestudiante.addEventListener("click", function () {
   
   //Nuevo Estudiante
    Actualizar = false;
    
    idestudiante.value = "Nuevo";
    nombre.value = "";
    apellido.value = "";
    nombretutor.value = "";
    telefono.value = "";
    direccion.value = "";
    date.value = "2000-01-01";
    edad.value = "";
    
    //Calcular edad
    var test = "";
    test = fechanac.value;
    test = test.substring(0, 4);
    var d = new Date();
    var n = d.getFullYear();

    var number1 = 1;
    number1 = n;
    var number2 = 2;
    number2 = test;

    var number3 = number1 - number2;

    edad.textContent = number3;

    nombre.focus();
    nombre.select();
})

function ActualizarEstudiante() {
    
    //Actualizar
    //Revisar que halla escrito un ID
    if(idactualizar.value == ""){
        alert("Escriba un ID para actualizar");
        idactualizar.focus();
        return;
    }else{
    
        //Revisar si el id existe
        var existe = true;
        try {
            if((estudiantes.length-1) < idactualizar.value || idactualizar.value < 1){
                alert("Este ID no existe");
                idactualizar.focus();
                return;
            }else{
                //continue...
            }
        } catch (e) {
            alert("Escriba un ID v�lido para actualizar");
            idactualizar.focus();
            return;
        }

        alert("Se va a Actualizar el estudiante: #"+idactualizar.value);
    }
    
}


btnactualizar.addEventListener("click", function () {
    ActualizarEstudiante();
})