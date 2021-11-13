import Badge from './Badge';

const BadgeBar = ( { badges }) => {
  return (
    <ul>
      {badges.map((badge) =>
        <Badge key={badge.id} badge={badge}/>
      )}
    </ul>
  )
}

export default BadgeBar;

const badges = [
  {
    name: 'First Steps',
    progress: 0
  },
  {
    name: 'High Five',
    progress: 0
  }
]
