import React from 'react';
import './Footer.css';
import '../App.css';
import TopButton from './TopButton';

function Footer(props){
    return(
        <div className="footer-container">
            
            <TopButton top={props.id}/>

            <div className="footer-main">
                <div className="footer-connect">
                    <h1>Join SASE UR</h1>
                    <p>Get involved! Join the SASE UR chapter and open your doors to countless opportunities.</p>
                    <div class="register-button">
                        <a href="https://ccc.rochester.edu/sase/club_signup" target="_blank" rel="noreferrer">Register</a>
                    </div>
                </div>

                <div className="footer-join">
                    <h1>Connect</h1>
                    <a href="https://www.facebook.com/URSASE/" target="_blank" rel="noreferrer">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/saseconnect/" target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/sase_ur/?hl=en" target="_blank" rel="noreferrer">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.saseconnect.org/" target="_blank" rel="noreferrer">
                        <i class="fas fa-link"></i>
                    </a>
                </div>

                <div className="footer-address">
                    <p>201 Wilson Commons</p>
                    <p>Rochester, New York, 14627</p>
                    <p>United States</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2020 Society of Asian Scientists and Engineers UR | 
                    Developed by <a href="https://www.joshua-choi.com" target="_blank" rel="noreferrer"> Joshua Choi </a> 
                    and <a href="https://desmond-lai.herokuapp.com/index.php" target="_blank" rel="noreferrer">Desmond Lai</a> </p>
            </div>
        </div>
    )
}

export default Footer