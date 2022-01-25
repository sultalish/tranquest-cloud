import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import firebase from './service/firebase';
import { db, auth } from './service/firebase';

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

  async function checkForProcrastination () {
    if (auth.currentUser)
    {
      const userRef = db.collection('users').doc(auth.currentUser.uid);
      const achieved = await userRef.collection('badges').doc('10').onSnapshot(async (querySnapshot) => {
        if (querySnapshot.data().dateAchieved == null) {
          let now = new Date();
          let userData = await userRef.get();
          let lastTimeCompletedTask = userData.data().lastTimeCompletedTask.seconds/86400;
          let daysSinceCompletedTask = now.getTime()/86400000 - lastTimeCompletedTask;
          if (daysSinceCompletedTask > 7)
          {
            userRef.collection('badges').doc['10'].update("dateAchieved", now);
            console.log("Procrastinator!!!");
          }
        }
      });
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
    checkForProcrastination();
  }, [])

  return (
    <div className="app">
      <section>
        {user ?
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' exact element={<DashBoard />} />
              <Route path='/tasks' element={<TaskDetails />} />
              <Route path='/texts' element={<TextChat user={user} />} />
              <Route path='/badges' element={<Badges user={user} />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <HPBar />
          </Router> : <Login />}
      </section>
    </div>
  );
}

export default App;
