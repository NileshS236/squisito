import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbnUTqTotmtkoo4-_fCQd-OmPqK3PVC4o",
  authDomain: "squisito-b8071.firebaseapp.com",
  databaseURL: "https://squisito-b8071.firebaseio.com",
  projectId: "squisito-b8071",
  storageBucket: "squisito-b8071.appspot.com",
  messagingSenderId: "949274644911",
  appId: "1:949274644911:web:d84f94cc24a823b25edf5a",
  measurementId: "G-X6GC5J9PPK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
