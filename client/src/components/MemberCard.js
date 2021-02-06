import React from 'react';
import './Members.css';
import '../App.css';

function MemberCard(props){
    return(
        <div className="member-card">
            <div className="member-card-img">
                <img src={props.src === null ? "images/default.jpg" : props.src} alt=""/>
            </div>
            <div className="member-card-title">
                <h1>{props.fullName}</h1>
                <h2>{props.email}</h2>
                <h2>{props.year}</h2>
            
            </div>
            <div className="member-card-info">
                <h2>Major: {props.major}</h2>
                <h2>Minor: {props.minor}</h2>
                <h2>Main Study: {props.study}</h2>
                <a href={props.link}>View Profile</a>
            </div>
        </div>
    )
}

export default MemberCard