import { Link } from 'react-router-dom';
import { auth } from '../service/firebase';

import './NavBar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="links">

          <Link className="link" to="/dashboard">DashBoard  </Link>
          <Link className="link" to="/tasks">Tasks  </Link>
          <Link className="link" to="/texts">Global Chat  </Link>
          <Link className="link" to="/badges">Badges</Link>
          <Link className="link" to="/" onClick={() => auth.signOut()}>Sign Out  </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
