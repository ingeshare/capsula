 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries




 import { getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  console.log("Valor de db desde firebaseConfig.js es:" + db);


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

  