import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbnUTqTotmtkoo4-_fCQd-OmPqK3PVC4o",
  authDomain: "squisito-b8071.firebaseapp.com",
  databaseURL: "https://squisito-b8071.firebaseio.com",
  projectId: "squisito-b8071",
  storageBucket: "squisito-b8071.appspot.com",
  messagingSenderId: "949274644911",
  appId: "1:949274644911:web:9ffc3d28c9febdf25edf5a",
  measurementId: "G-ZFZGPV8XC3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
