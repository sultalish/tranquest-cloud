import React, { useState, useEffect, useRef } from 'react';

import { auth, db } from '../service/firebase'

import '../App.css';
import SendMessage from './SendMessage';

const TextChat = ({ user }) => {
    const scroll = useRef();
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('users').doc(auth.currentUser.uid).collection('chats').orderBy('createdAt').limit(30).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

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
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default TextChat;