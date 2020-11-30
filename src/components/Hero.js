import React from 'react';
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <section id="hero">
            <div className="hero-head">
                <h1>The Society of</h1>
                <h1>Asian Scientists and Engineers</h1>
                <h2>University of Rochester</h2>
            </div>
            <div className="down-arrows">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
}

export default Hero
