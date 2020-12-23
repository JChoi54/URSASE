import React from 'react';
import './Members.css';
import '../App.css';
import MemberCard from './MemberCard';

function Alumni(props) {
    return(
        <div className={props.undergraduate ? "hide" : "alumni-container"}>
            <h1>Alumni</h1>
            <MemberCard />
        </div>
    )
}

export default Alumni