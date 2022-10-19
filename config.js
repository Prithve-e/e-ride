import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBF_F7lIbu4Oz3tupWk0sl7uqTUUu9yG_U",
  authDomain: "e-ride-ae002.firebaseapp.com",
  projectId: "e-ride-ae002",
  storageBucket: "e-ride-ae002.appspot.com",
  messagingSenderId: "646770834247",
  appId: "1:646770834247:web:31a160de4d4e0b218f6a62"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
