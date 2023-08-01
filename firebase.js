import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDkkP-lbfjHNFGaQhpNvxSlv5G-8NU2vHI",
    authDomain: "myapp-e541f.firebaseapp.com",
    databaseURL: "https://myapp-e541f-default-rtdb.firebaseio.com",
    projectId: "myapp-e541f",
    storageBucket: "myapp-e541f.appspot.com",
    messagingSenderId: "58400767785",
    appId: "1:58400767785:web:3d80f62fd1b89d702a0138",
    measurementId: "G-WD8L2QKQCL"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };
