import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  return (
    <div>
      <p><Link to="/dashboard">Dashboard</Link></p>
    </div>
  )
}

export default Home;
