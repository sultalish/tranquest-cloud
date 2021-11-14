import { useState, useEffect } from 'react';
import { db, auth } from '../service/firebase';
import firebase from '../service/firebase';

const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [level, setLevel] = useState(0);
  const [xpLevel, setXPLevel] = useState(0);

  useEffect(async() => {
    // Get user's level and XP level
    // let doc = await db.collection('users').doc(auth.currentUser.uid).get();
    // let data = await doc.data();
    // let xplevel = await data.xplevel;
    //let level = await data.level;

    // Get number of tasks completed
    const tasksRef = await db.collection('users').doc(auth.currentUser.uid).collection('tasks');
    const snapshot = await tasksRef.where('completed', '==', true).get();
    const tasks = snapshot.docs.map(doc => doc.data());
    let tasksCompleted = tasks.length;

    const totalXP = tasksCompleted * 100;
    const threshold = 100;
    const calcLevel = 0.5 + Math.sqrt(1 + 8*(totalXP)/(threshold)) / 2;

    setLevel(Math.floor(level));
    setXPLevel(level - Math.floor(level));

    db.collection('users').doc(auth.currentUser.uid).update({
      level: level,
      xplevel: xpLevel,
    })

    console.log(tasksCompleted);
    console.log(level);
    console.log(xpLevel);
    // if (xplevel >= level * 100) {
    //   db.collection('users').doc(auth.currentUser.uid).update({
    //     level: firebase.firestore.FieldValue.increment(1),
    //     xplevel: xplevel - (level * 100),
    //   })
    // }

    const width = xpLevel / (level * 100);

    setProgressWidth(width);
    setLevel(level);
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
