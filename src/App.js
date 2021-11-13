import React, { useState, useEffect } from 'react';

import Login from './components/Login';
// import Home from './components/Home';
import firebase from './service/firebase';

import './App.css';
<<<<<<< Updated upstream
=======
import TaskDetails from './components/TaskDetails';
import ChatsMenu from './components/ChatsMenu'
import DashBoard from './components/DashBoard';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      {user ? <TextChat user={user} /> : <Login />}
=======
      <section>
        {user ?
          <Router>
            <Navbar />
            <Routes>
              <Route path='/dashboard' exact element={<DashBoard />} />
              <Route path='/tasks' element={<TaskDetails />} />
              <Route path='/chatsmenu' element={<ChatsMenu />} />
              <Route path='/texts' element={<TextChat />} />
            </Routes>
          </Router> : <Login />}
      </section>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;