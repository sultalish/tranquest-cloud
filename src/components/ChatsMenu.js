import React, { useState, useEffect, useRef } from 'react';

import { auth, db } from '../service/firebase'

import '../App.css';
// eslint-disable-next-line
import SendMessage from './SendMessage';
// eslint-disable-next-line
import TextChat from './TextChat';
// eslint-disable-next-line
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line
import Login from "./Login"



const ChatsMenu = () => {
    // eslint-disable-next-line
    const scroll = useRef();
    const [chats, setChats] = useState([])
    useEffect(() => {
        db.collection('users').doc(auth.currentUser.uid).collection('chats').orderBy('createdAt').limit(30).onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div>

            <div className="msgs">
                {chats.map(({ chatName }) => (
                    <div>
                        <button className="chatName">{chatName}</button>
                    </div>
                ))}

                {/* <button onClick={() => window.open(<TextChat />)}>Start new chat!</button> */}
            </div >

            <div>
                <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
            </div>
        </div >
    )
};

export default ChatsMenu;