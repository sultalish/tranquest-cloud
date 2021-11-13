import React, { useState } from 'react'
import { db, auth } from '../service/firebase'
import firebase from "firebase/compat/app";

import '../App.css';

function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await db.collection('global-chat').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    };

    return (
        <div className="sendMsg">
            <form onSubmit={sendMessage}>
                <input className="msg-field" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                <button className="submit-button" type="submit">Send</button>
                <button className="signout-button" onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    );
};

export default SendMessage;