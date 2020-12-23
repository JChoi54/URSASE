import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Pillars from '../Pillars';
import Eboard from '../Eboard';
import Events from '../Events';
import Footer from '../Footer';

function HomePage (){
    return(
        <div>
            <Hero />
            <div className='content'>
                <Pillars />
                <Eboard />
                <Events />
                <Footer id="#hero"/>
            </div>
        </div>
    )
}

export default HomePage