import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
            <div className = "links">
                <Link to="/dashboard">DashBoard  </Link>
                <Link to="/tasks">Tasks  </Link>
                <Link to="/texts">TextChat  </Link>
            </div>
        </nav>
      </>
    );
  };
    
  export default Navbar;