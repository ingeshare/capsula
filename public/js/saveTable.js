let buttonSave = document.getElementById('button-save');







window.addEventListener('load', fnSaveTableInit);


function fnButtonSave(){
    alert("alert in button save function");

        // Add a new document in collection "cities"
    db.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

}




function fnSaveTableInit(){


  buttonSave.addEventListener('click', fnButtonSave);
  console.log("Valor de db desde firebaseConfig.js es:" + db);


}


