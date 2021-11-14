import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import firebase from './service/firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import TaskDetails from './components/TaskDetails';
import DashBoard from './components/DashBoard';
import TextChat from './components/TextChat';
import Navbar from './components/NavBar';
import Badges from './components/Badges';
import HPBar from './components/HPBar';



function App() {
  const [user, setUser] = useState(null);
  const [updateHPBar, setUpdateHPBar] = useState(false);

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
              <Route path='/' exact element={<DashBoard />} />
              <Route path='/tasks' element={<TaskDetails setUpdateHPBar={setUpdateHPBar}/>} />
              <Route path='/texts' element={<TextChat user={user} />} />
              <Route path='/badges' element={<Badges user={user} />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <HPBar updateHPBar={updateHPBar} setUpdateHPBar={setUpdateHPBar}/>
          </Router> : <Login />}
      </section>
    </div>
  );
}

export default App;
