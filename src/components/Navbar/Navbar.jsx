import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  /*const [displayusername, displayusernameupdate] = useState('');
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
      if (location.pathname === '/login' || location.pathname === '/register') {
          showmenuupdateupdate(false);
      } else {
          showmenuupdateupdate(true);
          let username = sessionStorage.getItem('username');
          if (username === '' || username === null) {
              usenavigate('/login');
          } else {
              displayusernameupdate(username);
          }
      }

  }, [location])*/

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-brand">
            <span className="nav-link text-white">
              <img
                src="https://cdn2.iconfinder.com/data/icons/flat-seo-web-ikooni/128/flat_seo2-21-128.png"
                width="30"
                height="30"
                className="d-inline-block align-top site-logo"
                alt=""
              />
              FinFriend
            </span>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-card" className="nav-link text-white">
              Add card
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link text-white">
              Log In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link text-white">
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customer" className="nav-link text-white">
              Customer
            </NavLink>
          </li>
          {/* <span >Welcome <b>{displayusername}</b></span> */}
          <li className="nav-item">
            <NavLink to="/login" className="nav-link text-white" style={{ float: 'right' }}>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
