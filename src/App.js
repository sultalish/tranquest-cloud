import React, { useState, useEffect } from 'react';

import Login from './components/Login';
// import Home from './components/Home';
import firebase from './service/firebase';

import './App.css';
import TextChat from './components/TextChat';
import ChatsMenu from './components/ChatsMenu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
    <div className="app">
      {user ? <ChatsMenu user={user} /> : <Login />}
    </div>
  );
}

export default App;