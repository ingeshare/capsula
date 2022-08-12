let buttonSave = document.getElementById('button-save');

function fnButtonSave(){
    alert("alert in button save function");

    //Add a new document in collection "cities"
   //await setDoc(doc(db, "cities", "LA"), {
     // name: "Los Angeles",
     // state: "CA",
    //  country: "USA"
   // });

}


function fnSaveTableInit(){
  buttonSave.addEventListener('click', fnButtonSave);
}


window.addEventListener('load', fnSaveTableInit);