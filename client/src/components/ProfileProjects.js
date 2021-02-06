import React from 'react';
import './Profile.css';
import '../App.css';
import ProfileSocials from './ProfileSocials';
import {Link} from 'react-router-dom';

function ProfileProjects(props) {
    return (
        <div className={props.projects ? "profile-info-settings" : "hide"}>
            <div className="container">
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>Featured</h1>
                            {props.isMe ? <Link to="/uploadprojects" className="edit-link">
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
                <div className="row">
                    <div className="col-8 profile-block">
                        <div className="profile-block-top">
                            <h1>Projects</h1>
                            {props.isMe ? <Link to="/editprofile" className="edit-link">
                                <i className="fas fa-edit"/>
                            </Link> : null }
                        </div>
                        <div className="divider"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileProjects