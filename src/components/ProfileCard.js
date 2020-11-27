import React from 'react';
import './ProfileCard.css';
import '../App.css';

function ProfileCard(props) {
    return(
        <div className="profile-card">
            <div className="profile-card-img">
                <img src={props.src} alt=""></img>
            </div>
            <div className="profile-card-content">
                <h2>{props.position}</h2>
                <h3>{props.name}</h3>
                <h3>{props.major} {props.year}</h3>
            </div>
            <div className="profile-card-socials">
                <h2>More Info</h2>
                <div className="social-icons">
                    <a href={props.email} target="_blank">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href={props.linkedin} target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href={props.link} target="_blank">
                        <i class="fas fa-link"></i>
                    </a>
                </div>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default ProfileCard 