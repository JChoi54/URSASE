import React, {useState} from 'react';
import './Members.css';
import '../App.css';
import Undergraduates from './Undergraduates.js';
import Alumni from './Alumni';

function Members() {

    const [all, setAll] = useState(true);
    const [alumni, setAlumni] = useState(false);
    const [undergraduate, setUndergraduate] = useState(false);

    const handleAll = () => {
        setAll(true);
        setAlumni(false);
        setUndergraduate(false);
    }

    const handleAlumni = () => {
        setAll(false);
        setAlumni(true);
        setUndergraduate(false);
    }

    const handleUndergraduates = () => {
        setAll(false);
        setAlumni(false);
        setUndergraduate(true);
    }

    return (
        <div className="members-container">
            <div id="members-top" className="members-cover">
                <h1>Meet the members of SASE and connect with them</h1>
            </div>
            <div className="members-filter">
                <ul>
                    <li className={all ? 'members-all active' : 'members-all'} onClick={handleAll}>All Members</li>
                    <li className={undergraduate ? 'members-undergraduates active' : 'members-undergraduates'}
                        onClick={handleUndergraduates}>Undergraduates
                    </li>
                    <li className={alumni ? 'members-alumni active' : 'members-alumni'} onClick={handleAlumni}>Alumni
                    </li>
                </ul>
            </div>

            <div className="members-content">
                <Undergraduates alumni={alumni}/>
                <Alumni undergraduate={undergraduate}/>
            </div>
        </div>
    )
}

export default Members