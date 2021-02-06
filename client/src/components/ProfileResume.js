import React from 'react';
import './Profile.css';
import '../App.css';
import ProfileSocials from './ProfileSocials';
import {Link} from 'react-router-dom';

function ProfileResume(props) {
    return (
        <div className={props.resume ? "profile-resume-container" : "hide"}>
            <div className="container">
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>Resume</h1>
                            {props.isMe ? <Link to="/uploadresume" className="edit-link">
                                <i className="fas fa-edit"/>
                            </Link> : null}
                        </div>
                        <div className="divider"/>
                    </div>
                    {props.linkedIn === null && props.facebook === null && props.instagram === null && props.link === null ? null :
                        <div className="col profile-block profile-socials">
                            <ProfileSocials
                                linkedin={props.linkedIn}
                                facebook={props.facebook}
                                instagram={props.instagram}
                                link={props.link}
                            />
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default ProfileResume