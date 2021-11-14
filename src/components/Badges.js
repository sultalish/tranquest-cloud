import { db, auth } from '../service/firebase';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import Badge from './Badge';
import HPBar from './HPBar';

const Badges = (user) => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    db.collection('users').doc(auth.currentUser.uid).collection('badges').onSnapshot(snapshot => {
        setBadges(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return (
    <div>
      {badges.map((badge) => {
        return <Badge badge={badge}/>
      })}
      <HPBar/>
    </div>
  )
}

export default Badges;
