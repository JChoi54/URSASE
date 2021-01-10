import React, {Component} from 'react';
import '../App.css';
import './Navbar.css';
import {Link, NavLink, withRouter} from 'react-router-dom';

class Navbar extends Component {
    state = {
        click: false
    }

    handleClick = () => {
        this.setState({click: !this.state.click})
    }

    closeMobileMenu = () => {
        this.setState({click: false})
    }

    render() {
        return (
            <nav className={this.props.location.pathname === "/" ? "navbar-container" : "navbar-container colored"}>
                <div className="navbar-logo">
                    <Link to="/" onClick={this.closeMobileMenu}>
                        <img src="images/sase_logo.png" alt="SASE Logo"/>
                    </Link>
                </div>

                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <NavLink exact to="/" className="nav-links" activeClassName="nav-links-active"
                                 onClick={this.closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>

                    {this.props.authenticated ?
                    <li>
                        <NavLink exact to="/members" className="nav-links" activeClassName="nav-links-active"
                                 onClick={this.closeMobileMenu}>
                            Members
                        </NavLink>
                    </li> 
                    : null}

                    <li>
                        <NavLink exact to="/contact" className="nav-links" activeClassName="nav-links-active"
                                 onClick={this.closeMobileMenu}>
                            Contact
                        </NavLink>
                    </li>

                    {this.props.authenticated ?
                        <li>
                            <NavLink exact to="/profile" className="nav-links" activeClassName="nav-links-active"
                                     onClick={this.closeMobileMenu}>
                                Profile
                            </NavLink>
                        </li> :
                        <li>
                            <NavLink exact to="/login" className="nav-links" activeClassName="nav-links-active"
                                     onClick={this.closeMobileMenu}>
                                Login
                            </NavLink>
                        </li>
                    }

                    {this.props.authenticated ?
                        <li>
                            <NavLink exact to="/logout" className="nav-links" activeClassName="nav-links-active"
                                     onClick={this.closeMobileMenu}>
                                Logout
                            </NavLink>
                        </li> : null
                    }
                </ul>
            </nav>

        )
    }

}

export default withRouter(Navbar)