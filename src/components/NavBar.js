import { Link } from 'react-router-dom';
import { auth } from '../service/firebase';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="links">
          <Link to="/dashboard">DashBoard  </Link>
          <Link to="/tasks">Tasks  </Link>
          <Link to="/texts">Global Chat  </Link>
          <button className=".signout-button" onClick={() => auth.signOut()}>Sign out</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;