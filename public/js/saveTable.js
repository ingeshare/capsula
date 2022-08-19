let buttonSave = document.getElementById('button-save');

window.addEventListener('load', fnSaveTableInit);


function fnButtonSave(){
    alert("alert in button save function");

    console.log(sessionStorage.getItem("db"));
    console.log(JSON.parse(sessionStorage.getItem("db")));
    var db = JSON.parse(sessionStorage.getItem("db"));
    console.log("el valor de db en saveTable es:" + db);


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
  


}


