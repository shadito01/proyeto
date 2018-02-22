
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

var pagina = 1;
var NuevoId = 1;

const botonagregar = document.querySelector("#botonagregar");
const paginaanterior = document.querySelector("#paginaanterior");
const paginasiguiente = document.querySelector("#siguientepagina");
const labelpage = document.querySelector("#labelpage");
const rellenar = document.querySelector("#rellenar");

var firebaseChanguinref = firebase.database().ref().child("estudiantes");

document.addEventListener('DOMContentLoaded', function() {
        if(pagina == 0){
        paginaanterior.disabled = true;
        }else{    
            paginaanterior.disabled = false;
        }
    labelpage.textContent = "-  " + (pagina+1) + "  -"; //cargar página
}, false);

firebaseChanguinref.on('value', (snapshot) => {
    
    //Vaciar Columnas
    for (var i = 1; i < 6; i++) {
        for (var k = 1; k < 8; k++) {
            console.log('columna' + k + 'f'+ i);
            window['columna' + k + 'f'+ i].textContent = "";
        }
    }

    console.log("Succesfully Wiped...");

    var fivepage = pagina*5;
    var normalcounter = 1;
    for (var i = 1; i < 6; i++) {
    window['columna1f'+normalcounter].textContent = snapshot.child(i+fivepage).child("nombre").val();
    window['columna2f'+normalcounter].textContent = snapshot.child(i+fivepage).child("apellido").val();
    window['columna3f'+normalcounter].textContent = snapshot.child(i+fivepage).child("nombre-tutor").val();
    window['columna4f'+normalcounter].textContent = snapshot.child(i+fivepage).child("telefono").val();
    window['columna5f'+normalcounter].textContent = snapshot.child(i+fivepage).child("direccion").val();
    window['columna6f'+normalcounter].textContent = snapshot.child(i+fivepage).child("grado").val();
    if(window['columna1f'+normalcounter].textContent != ""){
        window['columna7f'+normalcounter].textContent = (i+fivepage);
    }else{
    }
        //para ir sumando las filas...
        normalcounter++;
    }


    NuevoId = snapshot.numChildren()+1;
    console.log(NuevoId);

    });

botonagregar.addEventListener("click", function () {
    const textToSave = nombre.value+" "+apellido.value;
    console.log("I am going to save " + textToSave + " to Firestore");

    const IDAdder = NuevoId;

    //Código para agregar estudiante
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
})

paginaanterior.addEventListener("click", function () {
    //Reducir una página
    pagina--;
    //Si la pagina es la 1, desabilitar el boton de pagina anterior
    if(pagina == 0){
        paginaanterior.disabled = true;
    }else{    
    }

     labelpage.textContent = "-  " + (pagina+1) + "  -";
})



paginasiguiente.addEventListener("click", function () {
    //Reducir una página
    pagina++;
    //Si la pagina es la 1, desabilitar el boton de pagina anterior
    if(pagina > 0){
        paginaanterior.disabled = false;
    }else{    
    }

    labelpage.textContent = "-  " + (pagina+1) + "  -";
})


rellenar.addEventListener("click", function () {
   
    ////Rellenar Tabla
   
    
})
