import { auth, db, signInWithGoogle } from '../service/firebase';

import './Login.css';

import badges from './badges-list';

const Login = () => {
    return (
        <div className="login-page">
            <div className="task-header">
                <h2>Tranquest Cloud</h2>
            </div>
            <button className="login" onClick={signIn}>Sign in with Google</button>
        </div>
    )
}

function signIn() {
    signInWithGoogle().then((result) => {
<<<<<<< HEAD
        db.collection("users").doc(auth.currentUser.uid).set({
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid,
            tasksCompleted: 0
        }, { merge: true })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
=======
        var docRef = db.collection("users").doc(auth.currentUser.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                // nice, do nothing!!!
            } else {
                db.collection("users").doc(auth.currentUser.uid).set({
                    name: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    photoURL: auth.currentUser.photoURL,
                    uid: auth.currentUser.uid,
                    level: 1,
                    xplevel: 0,
                    tasksCompleted: 0
                }, { merge: true })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
>>>>>>> 206b2ff88f63cca54dbd10312b333c69670735ea

                db.collection("users").doc(auth.currentUser.uid).collection("tasks").doc("null").set({
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

<<<<<<< HEAD

        badges.forEach((badge, i) => {
            db.collection("badges").doc(i.toString())
            .set(badge, { merge: true })
                .then(() => {
                    console.log("Document successfully written!");
=======
                db.collection("users").doc(auth.currentUser.uid).collection("chats").doc("null").set({
>>>>>>> 206b2ff88f63cca54dbd10312b333c69670735ea
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                badges.forEach((badge, i) => {
                    db.collection("users").doc(auth.currentUser.uid).collection("badges").doc(i.toString())
                        .set({ ...badge, id: i }, { merge: true })
                        .then(() => {
                            console.log("Document successfully written!");
                        })
                        .catch((error) => {
                            console.error("Error writing document: ", error);
                        });
                });

                console.log(result)
            }
        })
    }).catch((error) => {
        console.error("Error logging it: ", error);
    });
}

export default Login;
