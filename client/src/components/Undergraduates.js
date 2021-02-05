import React, {useEffect, useState} from 'react';
import './Members.css';
import '../App.css';
import MemberCard from './MemberCard';

function Undergraduates(props) {
    const [state, setState] = useState({
        loading: true,
        undergraduates: []
    });

    useEffect(() => {
        fetch('/api/undergraduates').then(async res => {
            let json = await res.json()
            let undergraduates = []

            for (let i = 0; i < json.undergraduates.length; i++){
                let undergraduate = json.undergraduates[i]

                undergraduates.push(<MemberCard
                    key={i}
                    src={undergraduate.profilePicture}
                    fullName={undergraduate.firstName + " " + undergraduate.lastName}
                    year={undergraduate.graduationYear}
                    email={undergraduate.email}
                    major={undergraduate.major}
                    study={undergraduate.mainstudy}
                    link={"/profile?id=" + undergraduate.id}
                />)
            }

            setState(state => ({
                ...state,
                loading: false,
                undergraduates: undergraduates
            }))
        })
    }, [])

    return(
        <div className={props.alumni ? "hide": "undergraduates-container"}>
            {state.undergraduates.length > 0 ? <h1>Undergraduates</h1> : null }
            {state.undergraduates}
        </div>
    )
}

export default Undergraduates