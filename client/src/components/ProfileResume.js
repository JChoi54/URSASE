import React from 'react';
import './Profile.css';
import '../App.css';
import ProfileSocials from './ProfileSocials';
import {Link} from 'react-router-dom';

function ProfileResume(props) {
    return(
        <div className={props.resume ? "profile-resume-container" : "hide"}>
            <div className="container">
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>Resume</h1>
                            <Link to="/uploadresume" className="edit-link">
                                <i className="fas fa-edit"/>
                            </Link>
                        </div>
                        <div className="divider"/>
                    </div>
                    <div className="col profile-block profile-socials">
                        <ProfileSocials 
                            email="" 
                            linkedin="https://www.linkedin.com/in/joshuachoi54/"
                            instagram="https://www.instagram.com/choi._.create/?hl=en"
                            link="https://joshua-choi.com/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileResume