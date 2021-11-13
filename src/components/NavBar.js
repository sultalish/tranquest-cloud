import { Link } from 'react-router-dom';
import { auth } from '../service/firebase';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="links">
          <Link to="/dashboard">DashBoard  </Link>
          <Link to="/tasks">Tasks  </Link>
          <Link to="/chatsmenu">ChatsMenu  </Link>
          <Link to="/texts">TextChat  </Link>
          <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;