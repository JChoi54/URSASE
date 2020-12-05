import React from 'react';
import './SignInSignUp.css';
import '../App.css';

function SignUp(){
    return(
        <form action="" className="signup-form">
            <h2>Sign Up</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"></input>
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email"></input>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"></input>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password"></input>
            </div>
            <input type="submit" value="Sign Up" className="click-button"></input>
        </form>
    )
}

export default SignUp