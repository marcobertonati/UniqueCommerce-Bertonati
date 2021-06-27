//Importo FireBase
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiSNKeqMwq-O52UrYtGrUJosBpKEMYpE4",
    authDomain: "unique-firebase.firebaseapp.com",
    projectId: "unique-firebase",
    storageBucket: "unique-firebase.appspot.com",
    messagingSenderId: "1004622089067",
    appId: "1:1004622089067:web:83f5e390dad8c742e4da2e",
    measurementId: "G-KNM7D0NSNL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;