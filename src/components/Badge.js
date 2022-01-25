import { db, auth } from '../service/firebase';
import { useEffect, useState } from 'react';

const Badge = ({ badge }) => {


  const [percentageCompleted, setPercentageCompleted] = useState(0);

  useEffect(() => {
    if (badge.type === "rank")
    {
      let p = Math.floor(badge.progress / badge.sentinel * 100);
      if (p > 100) {
        setPercentageCompleted(100);
      }
      else {
        setPercentageCompleted(p);
      }
    }
  }, []);

  return (
    <div className='badge'>
      <h1>{badge.name}</h1>
      <p>{badge.description}</p>
      {badge.dateAchieved ?
        <p>Unlocked</p>
        :
        <p>Locked</p>
      }
      {badge.type === "rank" ?
        <p>{percentageCompleted}% Completed</p>
        :
        <p></p>
      }
    </div>
  )
}

export default Badge;
