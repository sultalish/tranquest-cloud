import React, { useState } from 'react';

const Badge = ({ badge }) => {
  function isBadgeUnlocked() {
    if (badge.progress === 1) {
      return true;
    }
    return false;
  }

  return (
    <div className='badge'>
      <p>{badge.name}</p>
      <p>{badge.description}</p>
      {isBadgeUnlocked() ?
        <p>{badge.dateAchieved}</p>
        :
        <p>{badge.progress * 100}%</p>
      }
    </div>
  )
}

export default Badge;
