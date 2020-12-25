import React from 'react';
import './Members.css';
import '../App.css';
import MemberCard from './MemberCard';

function Undergraduates(props) {
    return(
        <div className={props.alumni ? "hide": "undergraduates-container"}>
            <h1>Undergraduates</h1>
            <MemberCard 
                src="images/josh.jpg"
                fullname="Joshua Choi"
                year="2022"
                email="jchoi84@u.rochester.edu"
                major="Computer Science and Digital Media Studies"
                study="Web Development"
                link="profile"
            />
            <MemberCard />
            <MemberCard />

        </div>
    )
}

export default Undergraduates