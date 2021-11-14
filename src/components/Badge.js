const Badge = ({ badge }) => {

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
