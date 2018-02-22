
const nombre = document.querySelector("#NOMBRE");
const apellido = document.querySelector("#APELLIDO");
const columna1 = document.querySelector("#columna1f1");
const columna2 = document.querySelector("#columna2f1");
const botonagregar = document.querySelector("#botonagregar");

var firebaseChanguinref = firebase.database().ref().child("estudiantes").child("1").child("nombre");
var firebaseChanguinref1 = firebase.database().ref().child("estudiantes").child("1").child("apellido");

firebaseChanguinref.on('value', (snapshot) => {
    columna1.textContent = snapshot.val();
    console.log("I Have Retreive The Text from Firebase");
});

firebaseChanguinref1.on('value', (snapshot) => {
    columna2.textContent = snapshot.val();
    console.log("I Have Retreive The Text from Firebase");
});

botonagregar.addEventListener("click", function () {
    const textToSave = nombre.value+" "+apellido.value;
    console.log("I am going to save " + textToSave + " to Firestore");

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("nombre").set(nombre.value);

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("estudiantes").child("1").child("apellido").set(apellido.value);
    //firebaseRef.child("Headings").push().set(textToSave);
})