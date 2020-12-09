import React, {useState} from 'react';
import '../App.css';
import './Navbar.css';
import {Link, NavLink, withRouter} from 'react-router-dom';

function Navbar(props) {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <nav className={props.location.pathname === "/" ? "navbar-container" : "navbar-container colored"}>
            <div className="navbar-logo">
                <Link to="/" onClick={closeMobileMenu}>
                    <img src="images/sase_logo.png" alt="SASE Logo"/>
                </Link>
            </div>

            <div className = 'menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <NavLink exact to="/" className="nav-links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/resumes" className="nav-links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
                        Resumes
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile" className="nav-links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" className="nav-links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/login" className="nav-links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    
    )
}

export default withRouter(Navbar)