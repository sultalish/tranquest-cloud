import { useState, useEffect } from 'react';
import { db, auth } from '../service/firebase';
import firebase from '../service/firebase';

import './HPBar.css';

const HPBar = ({updateHPBar}) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [level, setLevel] = useState(0);
  const [xpLevel, setXPLevel] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(async() => {
    // Get number of tasks completed
    const tasksRef = await db.collection('users').doc(auth.currentUser.uid).collection('tasks');
    const snapshot = await tasksRef.where('completed', '==', true).get();
    const tasks = snapshot.docs.map(doc => doc.data());
    let tasksCompleted = tasks.length;

    const totalXP = tasksCompleted * 100;
    const threshold = 100;
    let calcLevel = 0.5 + Math.sqrt(1 + 8*(totalXP)/(threshold)) / 2;
    let currentLevel = Math.floor(calcLevel);

    console.log(xpLevel);
    setLevel(currentLevel);
    setXPLevel(calcLevel - Math.floor(calcLevel));
    setProgressWidth(`${(xpLevel * windowWidth) * 100 / windowWidth}%`);
  });

  const barStyle = {
    width: progressWidth
  }

  return (
    <div className="XPBAR">
      <div style={barStyle} className="CURRENTXP">
      </div>
      <div className="levels">
        <div className="level-1">
          <p>{level}</p>
        </div>
        <div className="level-2">
          <p>{level + 1}</p>
        </div>
      </div>
    </div>
  )
}

export default HPBar;
