import React from 'react';
import './Profile.css';
import '../App.css';
import ProfileSocials from './ProfileSocials';

function ProfileProjects(props) {
    return(
        <div className={props.projects ? "profile-info-settings" : "hide"}>
            <div className="container">
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>Featured</h1>
                            <i class="fas fa-edit"></i>
                        </div>
                        <div className="divider"></div>
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
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>Projects</h1>
                            <i class="fas fa-edit"></i>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileProjects