import React, {useEffect, useState} from 'react';
import './Members.css';
import '../App.css';
import MemberCard from './MemberCard';

function Alumni(props) {
    const [state, setState] = useState({
        loading: true,
        alumnis: []
    });

    useEffect(() => {
        fetch('/api/alumni').then(async res => {
            let json = await res.json()
            let alumnis = []

            for (let i = 0; i < json.alumnis.length; i++) {
                let alumni = json.alumnis[i]

                alumnis.push(<MemberCard
                    key={i}
                    src={alumni.profilePicture}
                    fullName={alumni.firstName + " " + alumni.lastName}
                    year={alumni.graduationYear}
                    email={alumni.email}
                    major={alumni.major}
                    study={alumni.mainstudy}
                    link={"/profile?id=" + alumni.id}
                />)
            }

            setState(state => ({
                ...state,
                loading: false,
                alumnis: alumnis
            }))
        })
    }, [])

    return (
        <div className={props.undergraduate ? "hide" : "alumni-container"}>
            {state.alumnis.length > 0 ? <h1>Alumni</h1> : null}
            {state.alumnis}
        </div>
    )
}

export default Alumni