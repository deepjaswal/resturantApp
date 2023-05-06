import {getApp,getApps, initializeApp } from "firebase/app";
import { getFirestore }from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCLofX8rj0qVlbrrXaDXmW6ky15_-vB_hc",
    authDomain: "resturantapp1-f18e4.firebaseapp.com",
    databaseURL: "https://resturantapp1-f18e4-default-rtdb.firebaseio.com",
    projectId: "resturantapp1-f18e4",
    storageBucket: "resturantapp1-f18e4.appspot.com",
    messagingSenderId: "610538775444",
    appId: "1:610538775444:web:eecee4a6c77a44bdd96581"
  };
  
  const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage =  getStorage(app)
  export {app , firestore , storage}