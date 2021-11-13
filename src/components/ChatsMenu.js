import React, { useState, useEffect, useRef } from 'react';

import { auth, db } from '../service/firebase'

import '../App.css';
import SendMessage from './SendMessage';

import TextChat from './TextChat';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from "./Login"



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
            <a>
                <h1>
                    <img src={auth.currentUser.photoURL} alt="" />
                </h1>
                {auth.currentUser.displayName}
                <br />
                {auth.currentUser.email}
            </a>


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
