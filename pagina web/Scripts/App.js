
const nombre = document.querySelector("#NOMBRE");
const apellido = document.querySelector("#APELLIDO");
const nombretutor = document.querySelector("#nombretutor");
const telefono = document.querySelector("#tel");
const direccion = document.querySelector("#direccion");
const grado = document.querySelector("#select");

const columna1f1 = document.querySelector("#columna1f1");
const columna2f1 = document.querySelector("#columna2f1");
const columna3f1 = document.querySelector("#columna3f1");
const columna4f1 = document.querySelector("#columna4f1");
const columna5f1 = document.querySelector("#columna5f1");
const columna6f1 = document.querySelector("#columna6f1");
const botonagregar = document.querySelector("#botonagregar");

var firebaseChanguinref = firebase.database().ref().child("estudiantes").child("1");

firebaseChanguinref.on('value', (snapshot) => {
    columna1f1.textContent = snapshot.child("nombre").val();
    columna2f1.textContent = snapshot.child("apellido").val();
    columna3f1.textContent = snapshot.child("nombre-tutor").val();
    columna4f1.textContent = snapshot.child("telefono").val();
    columna5f1.textContent = snapshot.child("direccion").val();
    columna6f1.textContent = snapshot.child("grado").val();
    console.log("I Have Retreive The Text from Firebase");
    });

botonagregar.addEventListener("click", function () {
    const textToSave = nombre.value+" "+apellido.value;
    console.log("I am going to save " + textToSave + " to Firestore");

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("nombre").set(nombre.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("apellido").set(apellido.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("nombre-tutor").set(nombretutor.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("telefono").set(telefono.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("direccion").set(direccion.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("grado").set(grado.value);

    //firebaseRef.child("Headings").push().set(textToSave);
})