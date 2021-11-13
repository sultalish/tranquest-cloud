import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import firebase from './service/firebase';

import './App.css';
import TaskDetails from './components/TaskDetails';



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
      <section>
      {user ? <TaskDetails /> : <Login />}
      </section>
    </div>
  );
}

export default App;