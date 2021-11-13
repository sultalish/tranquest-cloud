import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import firebase from './service/firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import TaskDetails from './components/TaskDetails';
import DashBoard from './components/DashBoard';
import TextChat from './components/TextChat';
import Navbar from './components/NavBar';



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
      {user ? 
      <Router>
      <Navbar />
      <Routes>
        <Route path='/dashboard' exact component={DashBoard} />
        <Route path='/tasks' component={TaskDetails} />
        <Route path='/texts' component={TextChat} />
      </Routes>
    </Router> : <Login />}
      </section>
    </div>
  );
}

export default App;