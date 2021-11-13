import { Link } from 'react-router-dom';
import { auth } from '../service/firebase';

import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="links">

          <Link className="link" to="/dashboard">DashBoard  </Link>
          <Link className="link" to="/tasks">Tasks  </Link>
          <Link className="link" to="/texts">Global Chat  </Link>
          <Link className="link" to="/profile">Profile</Link>
          <Link className="link" to="/badges">Badges</Link>
          <Link className="link" to="/" onClick={() => auth.signOut()}>Sign Out  </Link>
          {/* <button className=".signout-button" onClick={() => auth.signOut()}>Sign out</button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
