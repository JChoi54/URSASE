import React from 'react';
import './Profile.css';
import '../App.css';
import ProfileSocials from './ProfileSocials';
import {Link} from 'react-router-dom';

function ProfileInfo(props) {
    return (
        <div className={props.info ? "profile-info-container" : "hide"}>
            <div className="container">
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>General Information</h1>
                            <Link to="/editprofile" className="edit-link">
                                <i class="fas fa-edit"></i>
                            </Link>
                        </div>
                        <div className="divider"></div>
                    </div>
                    <div className="col profile-block profile-socials">
                        <ProfileSocials 
                            linkedin="https://www.linkedin.com/in/joshuachoi54/"
                            facebook="https://www.facebook.com/profile.php?id=100009332918146" 
                            instagram="https://www.instagram.com/choi._.create/?hl=en"
                            link="https://joshua-choi.com/"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>Biography</h1>
                            <Link to="/editprofile" className="edit-link">
                                <i class="fas fa-edit"></i>
                            </Link>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo