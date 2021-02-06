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
                            {props.isMe ? <Link to="/editprofile" className="edit-link">
                                <i className="fas fa-edit"/>
                            </Link> : null }
                        </div>
                        <div className="divider"/>
                    </div>
                    {props.linkedIn === null && props.facebook === null && props.instagram === null && props.link === null ? null : <div className="col profile-block profile-socials">
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
                            <h1>Biography</h1>
                            {props.isMe ? <Link to="/editprofile" className="edit-link">
                                <i className="fas fa-edit"/>
                            </Link> : null }
                        </div>
                        <div className="divider"/>
                        <div>
                            <p>{props.biography}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo