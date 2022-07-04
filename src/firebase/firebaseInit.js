// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkBP8Re9VwrqTlSvxJRyAq3AKv3ypUyIU",
  authDomain: "fireblogs-740fb.firebaseapp.com",
  projectId: "fireblogs-740fb",
  storageBucket: "fireblogs-740fb.appspot.com",
  messagingSenderId: "592917610659",
  appId: "1:592917610659:web:2574d554a2b9f62dc1ff16"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore()