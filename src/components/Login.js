import { auth, db, signInWithGoogle } from '../service/firebase';

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
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        db.collection("users").doc(auth.currentUser.uid).collection("tasks").doc("null").set({
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        db.collection("users").doc(auth.currentUser.uid).collection("chats").doc("null").set({
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        console.log(result)
    }).catch((error) => {
        console.error("Error logging it: ", error);
    });
}

export default Login;