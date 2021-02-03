import React from 'react';
import './Profile.css';
import '../App.css';

function ProfileSocials(props) {
    return (
        <div>
            {props.linkedin === null ? null : <a href={props.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"/>
            </a>}
            {props.facebook === null ? null : <a href={props.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-square"/>
            </a>}
            {props.instagram === null ? null : <a href={props.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"/>
            </a>}
            {props.link === null ? null : <a href={props.link} target="_blank" rel="noreferrer">
                <i className="fas fa-link"/>
            </a>}
        </div>
    )
}

export default ProfileSocials