import { db, auth } from '../service/firebase';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import Badge from './Badge';

const Badges = () => {
  const [badges, setBadges] = useState([]);

  useEffect(async () => {
    const badgesRef = await db.collection('users').doc(auth.currentUser.uid).collection('badges');
    badgesRef.onSnapshot(snapshot => {
        setBadges(snapshot.docs.map(doc => doc.data()))
    });
  }, []);

  return (
    <div>
      {badges.map((badge) => {
        return <Badge badge={badge}/>
      })}
    </div>
  )
}

export default Badges;
