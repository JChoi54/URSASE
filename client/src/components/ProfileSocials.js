import React from 'react';
import './Profile.css';
import '../App.css';

function ProfileSocials(props){
    return(
        <div>
            <a href={props.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"/>
            </a>
            <a href={props.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-square"/>
            </a>
            <a href={props.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"/>
            </a>
            <a href={props.link} target="_blank" rel="noreferrer">
                <i className="fas fa-link"/>
            </a>
        </div>
    )
}

export default ProfileSocials