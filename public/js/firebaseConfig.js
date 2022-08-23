console.log("Entró a FirebaseConfig");

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

  import {getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDx30RoOx4sNb5m3nO_F8NaSAOYkaiRAkc",
    authDomain: "capsula-7f5ab.firebaseapp.com",
    projectId: "capsula-7f5ab",
    storageBucket: "capsula-7f5ab.appspot.com",
    messagingSenderId: "852385578487",
    appId: "1:852385578487:web:04f411f72db3591b1882f2",
    measurementId: "G-40EYEH26YY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore();
  console.log("db es: " + db);
  console.log(db);


   //export const saveTask = (title, description) => {
    //console.log("Probando envío de datos a Firestore")
    
   //}



   //import{saveTask} from './firebaseConfig'
   
let title
let description

let buttonSave = document.getElementById('button-save');

window.addEventListener('load', fnSaveTableInit);

function fnSaveTableInit(){
  buttonSave.addEventListener('click', fnButtonSave);
}

function fnButtonSave(){
    alert("alert in button save function");

    var uid = sessionStorage.getItem('uid');    
            
    //saveTask(title, description)

  addDoc (collection (db,uid), {title: "title", description: "description"}); 

}
