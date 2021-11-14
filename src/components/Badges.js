import { db, auth } from '../service/firebase';
import { useState, useEffect } from 'react';
import Badge from './Badge';

import './Badges.css';

const Badges = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    db.collection('badges').onSnapshot(snapshot => {
        setBadges(snapshot.docs.map(doc => doc.data()))
=======
    db.collection('users').doc(auth.currentUser.uid).collection('badges').onSnapshot(snapshot => {
      setBadges(snapshot.docs.map(doc => doc.data()))
>>>>>>> 206b2ff88f63cca54dbd10312b333c69670735ea
    })
    console.log(badges);
  }, []);

  return (
    <div className="badges">
      {badges.map((badge) => {
        return <Badge badge={badge} />
      })}
<<<<<<< HEAD
=======
      <HPBar />
>>>>>>> 206b2ff88f63cca54dbd10312b333c69670735ea
    </div>
  )
}

export default Badges;
