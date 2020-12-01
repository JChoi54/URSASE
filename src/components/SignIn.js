import React from 'react';
import './SignInSignUp.css';
import '../App.css';

function SignIn(){
    return(
        <form action="" className="signin-form">
            <h2>Log In</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"></input>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"></input>
            </div>
            <input type="submit" value="Login" className="click-button"></input>
        </form>
    )
}

export default SignIn