import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes, Navigate } from 'react-router-dom';
import firebase from './service/firebase';

import Profile from './components/Profile';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Badges from './components/Badges';
import TaskDetails from './components/TaskDetails';
import TextChat from './components/TextChat';
import Account from './components/Account';

import { RequireAuth } from './components/RequireAuth';

import './App.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Navigate replace to='/dashboard'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard'
            element={
              <RequireAuth redirectLink="/login" Component={Dashboard} user={user}/>
            }
          />
          <Route path='/profile'
            element={
              <RequireAuth redirectLink="/login" Component={Profile} user={user}/>
            }
          />
        <Route path='/account'
            element={
              <RequireAuth redirectLink="/login" Component={Account} user={user}/>
            }
          />
          <Route path='/tasks'
            element={
              <RequireAuth redirectLink="/login" Component={TaskDetails} user={user}/>
            }
          />
          <Route path='/chat'
            element={
              <RequireAuth redirectLink="/login" Component={TextChat} user={user}/>
            }
          />
          <Route path='/badges'
            element={
              <RequireAuth redirectLink="/login" Component={Badges} user={user}/>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
