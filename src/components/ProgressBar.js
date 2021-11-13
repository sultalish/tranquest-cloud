import { db, auth } from '../service/firebase';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import useWindowDimensions from './useWindowDimensions';

// Each task completed grants 100xp
// XP required to reach next level = currentLevel * 1000

const ProgressBar = async ( {user} ) => {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [level, setLevel] = useState(0);
  const [xplevel, setXPLevel] = useState(0); // Between 0 and nextLevelXP
  const [nextLevelXP, setNextLevelXP] = useState(0);
  const [progressWidth, setProgressWidth] = useState('');


  // async function levelUp() {
  //   setLevel(level + 1);
  //   setCurrentLevelXP(currentLevelXP - nextLevelXP);
  //   setNextLevelXP(level * 1000);
  //
  //   const res = await db.collection('users').doc(auth.currentUser.uid)
  //     .update({level: level, xplevel: currentLevelXP})
  //     .then(() => {console.log("Level Up!")});
  // }

  useEffect(() => {
    const userRef = db.collection('users').doc(auth.currentUser.uid);
    console.log(userRef);
    setLevel(userRef.get("level"));
    setXPLevel(userRef.get("xplevel"));
    setNextLevelXP(userRef.get("level") * 1000);
    setProgressWidth(`${xplevel/nextLevelXP * windowWidth}px`);

    console.log(level);
    console.log(xplevel);
    console.log(nextLevelXP);
    console.log(progressWidth);
  }, [])

  return (
    <div>
      <div style={{width: progressWidth, height: '40px'}}></div>
    </div>
  )
}

export default ProgressBar;
