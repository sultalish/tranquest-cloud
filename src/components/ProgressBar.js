import { useState, useEffect } from 'react';
import { db, auth } from '../service/firebase';
import firebase from '../service/firebase';

const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(async() => {
    let doc = await db.collection('users').doc(auth.currentUser.uid).get();
    let data = await doc.data();
    let tasksCompleted = await data.tasksCompleted;
    let xplevel = await data.xplevel;
    let level = await data.level;

    console.log(tasksCompleted);
    console.log(level);
    console.log(xplevel);
    if (xplevel >= level * 100) {
      db.collection('users').doc(auth.currentUser.uid).update({
        level: firebase.firestore.FieldValue.increment(1),
        xplevel: xplevel - (level * 100),
      })
    }

    doc = await db.collection('users').doc(auth.currentUser.uid).get();
    data = await doc.data();
    tasksCompleted = await data.tasksCompleted;
    xplevel = await data.xplevel;
    level = await data.level;

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
