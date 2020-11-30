import React from 'react';
import './TopButton.css';
import '../App.css';

function TopButton(props) {
    
    return(
        <div className="top-button-container">
            <a className="top-button" href={props.top}>
                <i className="fas fa-angle-double-up"></i>
            </a>
        </div>
    
    )
}

export default TopButton