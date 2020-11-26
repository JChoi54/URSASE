import React, {useState} from 'react';
import '../App.css';
import './Navbar.css';

function Navbar() {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <nav className="navbar-container">
            <div className="navbar-logo">
                <a href="#">
                <img src="images/sase_logo.png" alt="SASE Logo"/>
                </a>
            </div>

            <div className = 'menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a className="nav-links" href="#">Home</a>
                </li>
                <li>
                    <a className="nav-links" href="#">Resumes</a>
                </li>
                <li>
                    <a className="nav-links" href="#">Contact</a>
                </li>
                <li>
                    <a className="nav-links" href="#">Login</a>
                </li>
            </ul>
        </nav>
    
    )
}

export default Navbar