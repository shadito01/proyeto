////(function{

const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#lastetHotDogStatus");
const saveButton = document.querySelector("#saveButton");
const texfromout = document.querySelector("#txtfromout");

var firebaseChanguinref = firebase.database().ref().child("Text");

firebaseChanguinref.on('value', (snapshot) => {
    texfromout.textContent = snapshot.val();
    console.log("I Have Retreive The Text from Firebase");
});

saveButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("I am going to save " + textToSave + " to Firestore");
        
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("Text").set(textToSave);
    //firebaseRef.child("Headings").push().set(textToSave);
})

//})();