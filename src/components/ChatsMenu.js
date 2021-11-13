import React, { useState, useEffect, useRef } from 'react';

import { auth, db } from '../service/firebase'

import '../App.css';
import SendMessage from './SendMessage';

import TextChat from './TextChat';


const ChatsMenu = () => {
    const scroll = useRef();
    const [chats, setChats] = useState([])
    useEffect(() => {
        db.collection('users').doc(auth.currentUser.uid).collection('chats').orderBy('createdAt').limit(30).onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div>
            <h1>HERE</h1>

            <div className="msgs">
                {chats.map(({ chatName }) => (
                    <div>
                        <button className="chatName">{chatName}</button>
                    </div>
                ))}

                {/* <button onClick={() => window.open(<TextChat />)}>Start new chat!</button> */}
                <a href={<TextChat />}>Text chat</a>
            </div>

            <div>
                <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
            </div>
        </div>
    )
};

export default ChatsMenu;