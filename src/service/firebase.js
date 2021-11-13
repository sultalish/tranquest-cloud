import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnv2RYWJlh-h55aM6YHu0i2K51IMqjjB8",
    authDomain: "tranquest-cloud.firebaseapp.com",
    projectId: "tranquest-cloud",
    storageBucket: "tranquest-cloud.appspot.com",
    messagingSenderId: "604093046881",
    appId: "1:604093046881:web:d2224dd3be6678ad28ca20",
    measurementId: "G-N3GPLQZKJN"
};

// Initialize Firebase 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, auth }
export default firebase;