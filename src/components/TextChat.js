import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../service/firebase'
import firebase from "firebase/compat/app";

import '../App.css';

function TextChat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([])
    const [msg, setMsg] = useState('')

    useEffect(() => {
        db.collection('global-chat').orderBy('createdAt').limit(30).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        });
    }, [messages])

    async function SendMessage(e) {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        if (msg !== '') {
            await db.collection('global-chat').add({
                text: msg,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }

        setMsg('');
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }

    function scrollDown() {
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sendMsg">
                <form onSubmit={SendMessage}>
                    <input className="msg-field" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                    <button className="submit-button" type="submit">Send</button>
                    <button className="signout-button" onClick={() => auth.signOut()}>Sign out</button>
                    <button className="scroll-button" onClick={() => scrollDown()}>Scroll Down</button>
                </form>
            </div >
            <div ref={scroll}></div>
        </div>
    )
}


export default TextChat;