import React from 'react';
import './Pillars.css';
import '../App.css';

function Pillars() {
    return(
        <div className="pillars">
            <h1>The Pillars of SASE</h1>
            <div className="pillar_icons">
                <div className="professionalism">
                    <img src="images/professionalism.svg" alt=""/>
                    <h2>Professionalism</h2>
                </div>
                <div className="diversity">
                    <img src="images/diversity.svg" alt=""/>
                    <h2>Diversity</h2>
                </div>
                <div className="service">
                    <img src="images/service.svg" alt=""/>
                    <h2>Service</h2>
                </div>
            </div>
            <p>
            The Society of Asian Scientists and Engineers aims to increase positive 
            visible impact and diversity of Asian heritage scientists and engineers 
            on campus, to build a bridge between the university and employers for the 
            networking possibilities and business connections, and to give back to the 
            Rochester community. Our mission is to create a place for other people to 
            learn and connect culturally, and to support its students, not only 
            academically and professionally, but also in individual growth and development.
            </p>
        </div>
    )
}

export default Pillars