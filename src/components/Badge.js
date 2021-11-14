import { db, auth } from '../service/firebase';
import { useEffect } from 'react';

const Badge = ({ badge }) => {

  // console.log(badge);
  // useEffect(async() => {
  //   const doc = await db.collection('users').doc(auth.currentUser.uid).get();
  //   const data = await doc.data();
  //   const tasksCompleted = await data.tasksCompleted;
  //
  //   console.log(tasksCompleted);
  //   console.log(badge.type === "rank" && tasksCompleted >= badge.sentinel);
  //   if (badge.type === "rank" && tasksCompleted >= badge.sentinel) {
  //     db.collection('users').doc(auth.currentUser.uid).collection('badges').doc(`${badge.id}`).update({
  //       progress: 1,
  //       dateAchieved: new Date()
  //     })
  //   } else if (badge.type === "rank") {
  //       const progress = tasksCompleted/badge.sentinel;
  //       db.collection('users').doc(auth.currentUser.uid).collection('badges').doc(`${badge.id}`).update({
  //         progress: progress,
  //       })
  //     }
  // }, []);

  return (
    <div className='badge'>
      <p>{badge.name}</p>
      <p>{badge.description}</p>
      {badge.progress === 1 ?
        <p>{badge.dateAchieved}</p>
        :
        <p>{badge.progress * 100}%</p>
      }
    </div>
  )
}

export default Badge;
