import { db, auth } from '../service/firebase';
import { useState, useEffect } from 'react';
import Badge from './Badge';

import './Badges.css';

const Badges = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    db.collection('badges').onSnapshot(snapshot => {
        setBadges(snapshot.docs.map(doc => doc.data()))
    })
    console.log(badges);
  }, []);

  return (
    <div className="badges">
      {badges.map((badge) => {
        return <Badge badge={badge}/>
      })}
    </div>
  )
}

export default Badges;
