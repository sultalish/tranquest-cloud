import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    console.log("hi");
  }, []);

  return (
    <div>
      <p><Link to="/tasks">Tasks</Link></p>
      <p><Link to="/chat">Chat</Link></p>
      <p><Link to="/badges">Badges</Link></p>
      <p><Link to="/profile">Profile</Link></p>
      <p><Link to="/account">Account</Link></p>
    </div>
  )
}

export default Dashboard;
