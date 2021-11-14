import { db, auth } from '../service/firebase';
import { useEffect } from 'react';

const Badge = ({ badge }) => {

  console.log(badge);
  // useEffect(async() => {
  //   const tasksRef = await db.collection('users').doc(auth.currentUser.uid).collection('tasks');
  //   const snapshot = await tasksRef.where('completed', '==', true).get();
  //   const tasks = snapshot.docs.map(doc => doc.data());
  //   let tasksCompleted = tasks.length;
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
      <h1>{badge.name}</h1>
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
