
const nombre = document.querySelector("#NOMBRE");
const apellido = document.querySelector("#APELLIDO");
const nombretutor = document.querySelector("#nombretutor");
const telefono = document.querySelector("#tel");
const direccion = document.querySelector("#direccion");
const grado = document.querySelector("#select");
const fechanac = document.querySelector("#date");
const edad = document.querySelector("#edad");

var hoy = Date.now;
var resultado = (hoy-fechanac.value).toString();

edad.textContent = resultado;

//Fila1
const columna1f1 = document.querySelector("#columna1f1");
const columna2f1 = document.querySelector("#columna2f1");
const columna3f1 = document.querySelector("#columna3f1");
const columna4f1 = document.querySelector("#columna4f1");
const columna5f1 = document.querySelector("#columna5f1");
const columna6f1 = document.querySelector("#columna6f1");

//Fila2
const columna1f2 = document.querySelector("#columna1f2");
const columna2f2 = document.querySelector("#columna2f2");
const columna3f2 = document.querySelector("#columna3f2");
const columna4f2 = document.querySelector("#columna4f2");
const columna5f2 = document.querySelector("#columna5f2");
const columna6f2 = document.querySelector("#columna6f2");

//Fila3
const columna1f3 = document.querySelector("#columna1f3");
const columna2f3 = document.querySelector("#columna2f3");
const columna3f3 = document.querySelector("#columna3f3");
const columna4f3 = document.querySelector("#columna4f3");
const columna5f3 = document.querySelector("#columna5f3");
const columna6f3 = document.querySelector("#columna6f3");

//Fila4
const columna1f4 = document.querySelector("#columna1f4");
const columna2f4 = document.querySelector("#columna2f4");
const columna3f4 = document.querySelector("#columna3f4");
const columna4f4 = document.querySelector("#columna4f4");
const columna5f4 = document.querySelector("#columna5f4");
const columna6f4 = document.querySelector("#columna6f4");

//Fila5
const columna1f5 = document.querySelector("#columna1f5");
const columna2f5 = document.querySelector("#columna2f5");
const columna3f5 = document.querySelector("#columna3f5");
const columna4f5 = document.querySelector("#columna4f5");
const columna5f5 = document.querySelector("#columna5f5");
const columna6f5 = document.querySelector("#columna6f5");

const botonagregar = document.querySelector("#botonagregar");

var firebaseChanguinref = firebase.database().ref().child("estudiantes");

firebaseChanguinref.on('value', (snapshot) => {
    
    for (var i = 1; i < 6; i++) {
    window['columna1f'+i.toString()].textContent = snapshot.child(i.toString()).child("nombre").val();
    window['columna2f'+i.toString()].textContent = snapshot.child(i.toString()).child("apellido").val();
    window['columna3f'+i.toString()].textContent = snapshot.child(i.toString()).child("nombre-tutor").val();
    window['columna4f'+i.toString()].textContent = snapshot.child(i.toString()).child("telefono").val();
    window['columna5f'+i.toString()].textContent = snapshot.child(i.toString()).child("direccion").val();
    window['columna6f'+i.toString()].textContent = snapshot.child(i.toString()).child("grado").val();
    }
    console.log("I Have Retreive The Text from Firebase");
    });

botonagregar.addEventListener("click", function () {
    const textToSave = nombre.value+" "+apellido.value;
    console.log("I am going to save " + textToSave + " to Firestore");

    //Código para agregar estudiante
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("2").child("nombre").set(nombre.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("2").child("apellido").set(apellido.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("2").child("nombre-tutor").set(nombretutor.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("2").child("telefono").set(telefono.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("2").child("direccion").set(direccion.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("2").child("grado").set(grado.value);

    var firebaseref = firebase.database().ref();
    firebaseref.child("estudiantes").child("2").child("fecha_nac").set(fechanac.value);

    //Código para modificar...
    //var firebaseRef = firebase.database().ref();
    //firebaseRef.child("estudiantes").child("1").child("nombre").set(nombre.value);

    //var firebaseRef = firebase.database().ref();
    //firebaseRef.child("estudiantes").child("1").child("apellido").set(apellido.value);

    //var firebaseRef = firebase.database().ref();
    //firebaseRef.child("estudiantes").child("1").child("nombre-tutor").set(nombretutor.value);

    //var firebaseRef = firebase.database().ref();
    //firebaseRef.child("estudiantes").child("1").child("telefono").set(telefono.value);

    //var firebaseRef = firebase.database().ref();
    //firebaseRef.child("estudiantes").child("1").child("direccion").set(direccion.value);

    //var firebaseRef = firebase.database().ref();
    //firebaseRef.child("estudiantes").child("1").child("grado").set(grado.value);

    //var firebaseref = firebase.database().ref();
    //firebaseref.child("estudiantes").child("1").child("fecha_nac").set(edad.value);

    //firebaseRef.child("Headings").push().set(textToSave);
})