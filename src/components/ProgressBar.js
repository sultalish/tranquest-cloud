import { db, auth } from '../service/firebase';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import useWindowWidth from './useWindowWidth';

// Each task completed grants 100xp
// XP required to reach next level = currentLevel * 1000

const ProgressBar = () => {
  const windowWidth = useWindowWidth();
  const [progressWidth, setProgressWidth] = useState('');
  const [user, setUser] = useState(null);


  // async function levelUp() {
  //   setLevel(level + 1);
  //   setCurrentLevelXP(currentLevelXP - nextLevelXP);
  //   setNextLevelXP(level * 1000);
  //
  //   const res = await db.collection('users').doc(auth.currentUser.uid)
  //     .update({level: level, xplevel: currentLevelXP})
  //     .then(() => {console.log("Level Up!")});
  // }

  useEffect(async () => {

    const userRef = db.collection('users').doc(auth.currentUser.uid);
    const doc = await userRef.get();
    setUser(doc.data());

    if (user !== null) {
      console.log(windowWidth);
      setProgressWidth(`${user.xplevel/(user.level*1000) * windowWidth}px`);
    }
    console.log(progressWidth);
  }, [windowWidth]);

  return (
    <div>
      <div style={{width: progressWidth, height: '40px'}}></div>
    </div>
  )
}

export default ProgressBar;
