import React from 'react';
import './Account.css';
import '../App.css';
import {NavLink} from 'react-router-dom';

function AccountSidebar(){
    return(
        <div>
            <ul>
                <NavLink to="/editprofile" className="sidebar-links" activeClassName="sidebar-links-active">
                    <li>Edit Profile</li>
                </NavLink>

                <NavLink to="/uploadresume" className="sidebar-links" activeClassName="sidebar-links-active">
                    <li>Upload Resume</li>
                </NavLink>

                <NavLink to="/uploadprojects" className="sidebar-links" activeClassName="sidebar-links-active">
                    <li>Upload Projects</li>
                </NavLink>

                <NavLink to="/changepassword" className="sidebar-links" activeClassName="sidebar-links-active">
                    <li>Change Password</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default AccountSidebar