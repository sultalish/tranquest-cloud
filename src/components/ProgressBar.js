import { useState, useEffect } from 'react';
import { db, auth } from '../service/firebase';
import firebase from '../service/firebase';

const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [level, setLevel] = useState(0);
  const [xpLevel, setXPLevel] = useState(0);

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

    setLevel(currentLevel);
    setXPLevel(calcLevel - Math.floor(calcLevel));

    const width = xpLevel / (level * 100);

    setProgressWidth(width);
  }, [])

  const divStyle = {
    height: 20,
    marginTop: 100,
  }

  const barStyle = {
    width: progressWidth,
    height: 20,
    backgroundColor: "black"
  }

  return (
    <div style={divStyle}>
      <p>{level}</p>
      <div style={barStyle}>
      </div>
      <p>{level + 1}</p>
    </div>
  )
}

export default ProgressBar;
