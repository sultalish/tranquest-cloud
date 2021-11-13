import { auth, db, signInWithGoogle } from '../service/firebase';
import firebase from "firebase/compat/app";

import '../App.css';

const Login = () => {
    return (
        <div>
            <button className="button" onClick={signIn}>Sign in with google</button>
        </div>
    )
}

function signIn() {
    signInWithGoogle().then((result) => {
        db.collection("users").doc(auth.currentUser.uid).set({
            name: auth.currentUser.displayName,
            email: auth.currentUser.email
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        const user = db.collection("users").doc(auth.currentUser.uid);

        user.collection("tasks").doc("null").set({
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        console.log(result)
    })
}

export default Login;