import React, {useState} from 'react';
import './SignInSignUp.css';
import '../App.css';
import SignIn from './SignIn'
import SignUp from './SignUp'

function SignInSignUp(){

    const [mode, setMode] = useState(true);

    const signupmode = () => setMode(false);
    const signinmode = () => setMode(true);

    return(
        <div className={mode ? 'login-container' : 'login-container signup-mode'}>
            <div className="forms-container">
                <div className="signin-signup">
                    <SignIn />
                    <SignUp />
                </div>
            </div>

            <div className="option-container">
                <div className="option left-option">
                    <div className="option-content">
                        <h3>New Here?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="click-button transparent" id="signup-button" onClick={signupmode}>Sign Up</button>
                    </div>
                </div>

                <div className="option right-option">
                    <div className="option-content">
                        <h3>Already a member?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="click-button transparent" id="signin-button" onClick={signinmode}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInSignUp