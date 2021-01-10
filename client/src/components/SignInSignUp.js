import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import './SignInSignUp.css';
import '../App.css';
import SignIn from './SignIn'
import SignUp from './SignUp'

class SignInSignUp extends Component {
    state = {
        mode: true,
        redirect: false
    }

    signupMode = () => {
        this.setState({
            mode: false
        })
    }

    signinMode = () => {
        this.setState({
            mode: true
        })
    }

    componentDidMount() {
        fetch('/api/checkToken')
            .then(res => {
                if (res.status === 200) {
                    this.setState({redirect: true})
                }
            })
    }

    render() {
        if (this.state.redirect) {
            return(
                <Redirect to="/profile" />
            )
        } else {
            return (
                <div className={this.state.mode ? 'login-container' : 'login-container signup-mode'}>
                    <div className="forms-container">
                        <div className="signin-signup">
                            <SignIn logIn={this.props.logIn} />
                            <SignUp/>
                        </div>
                    </div>

                    <div className="option-container">
                        <div className="option left-option">
                            <div className="option-content">
                                <h3>New Here?</h3>
                                <p>As a member of UR SASE, you have access to a valuable support network, 
                                    as well as several opportunities to grow yourself as a leader and 
                                    budding professional.</p>
                                <button className="click-button transparent" id="signup-button"
                                        onClick={this.signupMode}>Sign Up
                                </button>
                            </div>
                        </div>

                        <div className="option right-option">
                            <div className="option-content">
                                <h3>Already a member?</h3>
                                <p>As a member of UR SASE, your #SASEfam will always be there for you. Log in to 
                                    connect with the other members of SASE!</p> 
                                <button className="click-button transparent" id="signin-button"
                                        onClick={this.signinMode}>Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SignInSignUp