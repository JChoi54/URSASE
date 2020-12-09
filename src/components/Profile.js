import React, {useState} from 'react';
import './Profile.css';
import '../App.css';
import ProfileInfo from './ProfileInfo';
import ProfileResume from './ProfileResume';
import ProfileProjects from './ProfileProjects';
import {Link} from 'react-router-dom';

function Profile() {

    const[info, setInfo] = useState(true);
    const[resume, setResume] = useState(false);
    const[projects, setProjects] = useState(false);

    const handleInfo = () => {
        setInfo(true);
        setResume(false);
        setProjects(false);
    }

    const handleResume = () => {
        setInfo(false);
        setResume(true);
        setProjects(false);
    }

    const handleProjects = () => {
        setInfo(false);
        setResume(false);
        setProjects(true);
    }

    return(
        <div className="profile-container">
            <div className="profile-cover">
                <div class="edit-profile-button">
                    <i class="fas fa-cog"></i>
                    <Link to="/editprofile">
                        Settings
                    </Link>
                </div>
            </div>

            <div className="profile-pic">
                <div className="profile-pic-top">
                    <div className="profile-pic-img">
                        <img src="images/josh.jpg" alt=""></img>
                    </div>
                    <div>
                        <h1 class="fullname">Joshua Choi</h1>
                        <h2 class="grad-year">Undergraduate Student • 2022</h2>
                    </div>
                </div>
                <div className="profile-pic-middle"></div>
                <div className="profile-pic-bottom">
                    <ul>
                        <li className={info ? 'user-info active' : 'user-info'} onClick={handleInfo}>Personal Info</li>
                        <li className={resume ? 'user-resume active' : 'user-resume'} onClick={handleResume}>Resume</li>
                        <li className={projects ? 'user-projects active' : 'user-projects'} onClick={handleProjects}>Projects</li>
                    </ul>
                </div>
            </div>
            <div className="profile-content">
                <ProfileInfo info={info}/>
                <ProfileResume resume={resume}/>
                <ProfileProjects projects={projects}/>
            </div>
        </div>
    )
}

export default Profile