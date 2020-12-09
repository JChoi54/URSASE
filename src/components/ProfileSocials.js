import React from 'react';
import './Profile.css';
import '../App.css';

function ProfileSocials(props){
    return(
        <div>
            <a href={props.linkedin} target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href={props.facebook} target="_blank" rel="noreferrer">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href={props.instagram} target="_blank" rel="noreferrer">
                <i class="fab fa-instagram"></i>
            </a>
            <a href={props.link} target="_blank" rel="noreferrer">
                <i class="fas fa-link"></i>
            </a>
        </div>
    )
}

export default ProfileSocials