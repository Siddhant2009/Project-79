import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyAzS1VarmdUtYWVzS2DGmBujsJJeP2oJQU",
    authDomain: "rideapp-401c0.firebaseapp.com",
    projectId: "rideapp-401c0",
    storageBucket: "rideapp-401c0.appspot.com",
    messagingSenderId: "411847828812",
    appId: "1:411847828812:web:0d9e75efeb703a7d74dbe9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


