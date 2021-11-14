import { db, auth } from '../service/firebase';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import Badge from './Badge';

import './Badges.css';

const Badges = (user) => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    db.collection('badges').onSnapshot(snapshot => {
      setBadges(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return (
    <div className="badges">
      {badges.map((badge) => {
        return <Badge badge={badge} />
      })}
    </div>
  )
}

export default Badges;
