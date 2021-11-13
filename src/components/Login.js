import { db, auth, signInWithGoogle } from '../service/firebase';

import { useNavigate } from 'react-router-dom';

import badges from './badges-list';

import '../App.css';

const Login = () => {
  const navigate = useNavigate();

  function signIn() {
    signInWithGoogle().then((result) => {
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

        db.collection("users").doc(auth.currentUser.uid).collection("tasks").doc("null").set({
        }, { merge: true })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        db.collection("users").doc(auth.currentUser.uid).collection("chats").doc("null").set({
        }, { merge: true })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        badges.forEach((badge, i) => {
          db.collection("users").doc(auth.currentUser.uid).collection("badges").doc(i.toString()).set(badge, { merge: true })
          .then(() => {
              console.log("Document successfully written!");
          })
          .catch((error) => {
              console.error("Error writing document: ", error);
          });
        });
        navigate('/dashboard');
    })
  }

  return (
      <div>
          <button className="button" onClick={signIn}>Sign in with google</button>
      </div>
  )
}

export default Login;
