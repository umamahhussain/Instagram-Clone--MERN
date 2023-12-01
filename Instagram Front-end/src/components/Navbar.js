import React from 'react'
import { Outlet, Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <div className="navbar">
        <nav>
          <div className="nav-wrapper white">
            <Link to="/" className="brand-logo">Instagram</Link>
            <ul className="right hide-on-med-and-down">
              <li>
              <Link to="/">Home</Link>
                </li>
              <li>
              <Link to="/profile">Profile</Link>
                </li>
                <li>
              <Link to="/createpost">Create Post</Link>
                </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
              <Link to="/signup">Signup</Link>
              </li>

            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    )
}

export default NavBar;