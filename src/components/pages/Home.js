import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Pillars from '../Pillars';
import Eboard from '../Eboard';

function Home (){
    return(
        <div>
            <Hero />
            <div className='content'>
                <Pillars />
                <Eboard />
            </div>
        </div>
    )
}

export default Home