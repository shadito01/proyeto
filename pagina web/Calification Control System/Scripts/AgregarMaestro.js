
const idmaestro = document.querySelector("#codmaestro");
const nombremaestro = document.querySelector("#nombremaestro");
const apellidomaestro = document.querySelector("#apellidomaestro");
const telefonomaestro = document.querySelector("#telmaestro");
const direccionmaestro = document.querySelector("#direccionmaestro");

const codigomateria = document.querySelector("#codmateria");
const nombremateria = document.querySelector("#nombremateria");
const codigomaestro = document.querySelector("#codigomaestro");

const codmateriacali = document.querySelector("#codigoestudiantcai");
const nombremateriacali = document.querySelector("#codigomateriacali");
const notacali = document.querySelector("#notacali");
const observacioncali = document.querySelector("#observacioncali");

/*
//Fila1
const columna1f1 = document.querySelector("#columna1f1");
const columna2f1 = document.querySelector("#columna2f1");
const columna3f1 = document.querySelector("#columna3f1");
const columna4f1 = document.querySelector("#columna4f1");
const columna5f1 = document.querySelector("#columna5f1");
const columna6f1 = document.querySelector("#columna6f1");
const columna7f1 = document.querySelector("#columna7f1");
const columna8f1 = document.querySelector("#columna8f1");
const columna9f1 = document.querySelector("#columna9f1");

//Fila2
const columna1f2 = document.querySelector("#columna1f2");
const columna2f2 = document.querySelector("#columna2f2");
const columna3f2 = document.querySelector("#columna3f2");
const columna4f2 = document.querySelector("#columna4f2");
const columna5f2 = document.querySelector("#columna5f2");
const columna6f2 = document.querySelector("#columna6f2");
const columna7f2 = document.querySelector("#columna7f2");
const columna8f2 = document.querySelector("#columna8f2");
const columna9f2 = document.querySelector("#columna9f2");

//Fila3
const columna1f3 = document.querySelector("#columna1f3");
const columna2f3 = document.querySelector("#columna2f3");
const columna3f3 = document.querySelector("#columna3f3");
const columna4f3 = document.querySelector("#columna4f3");
const columna5f3 = document.querySelector("#columna5f3");
const columna6f3 = document.querySelector("#columna6f3");
const columna7f3 = document.querySelector("#columna7f3");
const columna8f3 = document.querySelector("#columna8f3");
const columna9f3 = document.querySelector("#columna9f3");

//Fila4
const columna1f4 = document.querySelector("#columna1f4");
const columna2f4 = document.querySelector("#columna2f4");
const columna3f4 = document.querySelector("#columna3f4");
const columna4f4 = document.querySelector("#columna4f4");
const columna5f4 = document.querySelector("#columna5f4");
const columna6f4 = document.querySelector("#columna6f4");
const columna7f4 = document.querySelector("#columna7f4");
const columna8f4 = document.querySelector("#columna8f4");
const columna9f4 = document.querySelector("#columna9f4");

//Fila5
const columna1f5 = document.querySelector("#columna1f5");
const columna2f5 = document.querySelector("#columna2f5");
const columna3f5 = document.querySelector("#columna3f5");
const columna4f5 = document.querySelector("#columna4f5");
const columna5f5 = document.querySelector("#columna5f5");
const columna6f5 = document.querySelector("#columna6f5");
const columna7f5 = document.querySelector("#columna7f5");
const columna8f5 = document.querySelector("#columna8f5");
const columna9f5 = document.querySelector("#columna9f5");
*/

var pagina2 = 0; //Página por defecto...
var NuevoIdmaestro = 1;
var NuevoIdMaeteria = 1;
var NuevoIdCalificacion = 1;
var Indexing2 = false;
var fivepage2 = 0;

const agregarmaestro = document.querySelector("#agregarmaestro");
const agregarmateria = document.querySelector("#agregarmateria");
const agregarevaluacion = document.querySelector("#botonagregarcali");
const paginaanterior2 = document.querySelector("#paginaanterior2");
const paginasiguiente2 = document.querySelector("#siguientepagina2");
const labelpage2 = document.querySelector("#labelpage2");

var ListenerMaterias = firebase.database().ref().child("materias");
var ListenerMaestros = firebase.database().ref().child("maestros");
var ListenerEvaluaciones = firebase.database().ref().child("evaluaciones");
var maestros = new Array();
var materias = new Array();
var evaluaciones = new Array();

document.addEventListener('DOMContentLoaded', function () {
    if (pagina2 == 0) {
        paginaanterior2.disabled = true;
    } else {
        paginaanterior2.disabled = false;
    }

    //Revisar que en la próxima página halla datos para mostrar, de lo contrario desactivar el botón de "Página siguiente"...
    if (((NuevoIdmaestro - 1) - ((pagina2 + 1) * 5)) > 0) {
        paginasiguiente2.disabled = false;
    } else {
        paginasiguiente2.disabled = true;
    }

    labelpage2.textContent = "-  " + (pagina2 + 1) + "  -"; //cargar página

}, false);

ListenerMaestros.on('value', (snapshot) => {

    //Conseguir último ID
    NuevoIdmaestro = snapshot.numChildren() + 1;
    console.log(NuevoIdmaestro);
    maestros = new Array(snapshot.numChildren());

    for (var i = 1; i < NuevoIdmaestro; i++) {
        maestros[i] = new Array(5);
        maestros[i][0] = i.value;
        maestros[i][1] = snapshot.child(i).child("nombre").val();
        maestros[i][2] = snapshot.child(i).child("apellido").val();
        maestros[i][3] = snapshot.child(i).child("telefono").val();
        maestros[i][4] = snapshot.child(i).child("direccion").val();
    }


});

ListenerMaterias.on('value', (snapshot) => {

    //Conseguir último ID
    NuevoIdMaeteria = snapshot.numChildren() + 1;
    console.log(NuevoIdMaeteria);
    materias = new Array(snapshot.numChildren());

    for (var i = 1; i < NuevoIdMaeteria; i++) {
        materias[i] = new Array(3);
        materias[i][0] = i.value;
        materias[i][1] = snapshot.child(i).child("nombremat").val();
        materias[i][2] = snapshot.child(i).child("codmaestro").val();
    }


});

ListenerEvaluaciones.on('value', (snapshot) => {

    //Conseguir último ID
    NuevoIdCalificacion = snapshot.numChildren() + 1;
    console.log(NuevoIdCalificacion);
    evaluaciones = new Array(snapshot.numChildren());

    for (var i = 1; i < NuevoIdCalificacion; i++) {
        evaluaciones[i] = new Array(3);
        evaluaciones[i][0] = i.value;
        evaluaciones[i][1] = snapshot.child(i).child("codigoparticipante").val();
        evaluaciones[i][2] = snapshot.child(i).child("codigomateria").val();
        evaluaciones[i][2] = snapshot.child(i).child("nota").val();
        evaluaciones[i][2] = snapshot.child(i).child("observacion").val();
    }

});

agregarmaestro.addEventListener("click", function () {

    var RevisarCampos = RevisarCamposRellenosmaestro();

    if (RevisarCampos) {

        console.log("Guardando nuevo maestros...");

        const IDAdder = NuevoIdmaestro;

        //Código para agregar estudiante
        var firebaseRef = firebase.database().ref();

        firebaseRef.child("maestros").child(IDAdder).child("nombre").set(nombremaestro.value);
        firebaseRef.child("maestros").child(IDAdder).child("apellido").set(apellidomaestro.value);
        firebaseRef.child("maestros").child(IDAdder).child("telefono").set(telefonomaestro.value);
        firebaseRef.child("maestros").child(IDAdder).child("direccion").set(direccionmaestro.value);

        alert("Se agregó exitosamente el maestro con id: "+IDAdder);
        NuevoMaestro();

    } else {
        alert("Rellene todos los campos antes de Guardar");
    }
})

agregarmateria.addEventListener("click", function () {

    var RevisarCampos = RevisarCamposMateria();

    if (RevisarCampos) {

        console.log("Guardando nueva Materia...");

        const IDAdder = NuevoIdMaeteria;

        //Código para agregar estudiante
        var firebaseRef = firebase.database().ref();

        firebaseRef.child("materias").child(IDAdder).child("nombremat").set(nombremateria.value);
        firebaseRef.child("materias").child(IDAdder).child("codmaestro").set(codigomaestro.value);

        alert("Se agregó exitosamente el maestro con id: "+IDAdder);
        NuevaMateria();

    } else {
        alert("Rellene todos los campos antes de Guardar");
    }
})

agregarevaluacion.addEventListener("click", function () {

    var RevisarCampos = RevisarCamposEvaluacion();

    if (RevisarCampos) {

        console.log("Guardando nueva Evaluacion...");

        const IDAdder = NuevoIdCalificacion;

        //Código para agregar estudiante
        var firebaseRef = firebase.database().ref();

        firebaseRef.child("evaluaciones").child(IDAdder).child("codigoparticipante").set(codmateriacali.value);
        firebaseRef.child("evaluaciones").child(IDAdder).child("codigomateria").set(nombremateriacali.value);
        firebaseRef.child("evaluaciones").child(IDAdder).child("nota").set(notacali.value);
        firebaseRef.child("evaluaciones").child(IDAdder).child("observacion").set(observacioncali.value);

        alert("Se agregó exitosamente la evaluacion con id: "+IDAdder); 
        NuevaEvaluacion();

    } else {
        alert("Rellene todos los campos antes de Guardar");
    }
})

function NuevoMaestro(){
  nombremaestro.value = "";
  apellidomaestro.value = "";
  telefonomaestro.value = "";
  direccionmaestro.value = "";
  nombremaestro.focus();
}

function NuevaEvaluacion(){
  codmateriacali.value = "";
  nombremateriacali.value = "";
  notacali.value = "";
  observacioncali.value = "";
  codmateriacali.focus();
}

function NuevaMateria(){
  nombremateria.value = "";
  codigomaestro.value = "";
  nombremateria.focus();
}

function RevisarCamposRellenosmaestro(){
if(nombremaestro.value == "" || apellidomaestro.value == "" || telefonomaestro.value == "" || direccionmaestro.value == ""){
  return false;
}else{
  return true;
  }
}

function RevisarCamposEvaluacion(){
if(codmateriacali.value == "" || nombremateriacali.value == "" || notacali.value == "" || observacioncali.value == ""){
  return false;
}else{
  return true;
  }
}

function RevisarCamposMateria(){
if(nombremateria.value == "" || codigomaestro.value == ""){
  return false;
}else{
  return true;
  }
}

