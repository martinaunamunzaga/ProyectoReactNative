import app from "firebase/app";
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyClFaoPTP50apQcvH22Xfgo-3bltzt5yfA",
    authDomain: "proyectorn-firebase.firebaseapp.com",
    projectId: "proyectorn-firebase",
    storageBucket: "proyectorn-firebase.appspot.com",
    messagingSenderId: "541955237060",
    appId: "1:541955237060:web:fe159c3bf273caeee49591"
  };

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
  