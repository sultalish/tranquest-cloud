import React, { useState, useEffect } from 'react';

import Login from './components/Login';
// import Home from './components/Home';
import firebase from './service/firebase';

import './App.css';
import TextChat from './components/TextChat';



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
      {user ? <TextChat user={user} /> : <Login />}
    </div>
  );
}

export default App;