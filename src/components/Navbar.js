import React, {useState} from 'react';
import '../App.css';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <nav className="navbar-container">
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
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
                        Resumes
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    
    )
}

export default Navbar