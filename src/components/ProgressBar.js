import { useState, useEffect } from 'react';
import { db, auth } from '../service/firebase';
import firebase from '../service/firebase';

const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasks, setTasks] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(async() => {
    const doc = await db.collection('users').doc(auth.currentUser.uid).get();
    const data = await doc.data();
    const tasksCompleted = await data.tasksCompleted;
    const xplevel = await data.xplevel;
    const level = await data.level;

    console.log(tasksCompleted);
    console.log(level);
    console.log(xplevel);
    if (xplevel >= level * 100) {
      db.collection('users').doc(auth.currentUser.uid).update({
        level: firebase.firestore.FieldValue.increment(1),
        xplevel: xplevel - (level * 100),
      })
    }
    const width = xplevel / (level * 100);

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
