import React, {Component} from 'react';
import './SignInSignUp.css';
import '../App.css';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        isAlumni: false,
        postResponse: '',
    }

    handleSubmit = async e => {
        e.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                })
            });
            const body = await response.text();

            // TODO: Figure out a way to show the state of the sign up.
            this.setState({postResponse: body})
        }
        else {
            // TODO: Add CSS class to indicate error instead.
            this.setState({postResponse: "Check if your password matches."})
        }
    }

    render() {
        return (
            <form action="#" className="signup-form" onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" placeholder="First Name" value={this.state.firstName}
                           onChange={e => this.setState({firstName: e.target.value})}/>
                </div>
                <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" placeholder="Last Name" value={this.state.lastName}
                           onChange={e => this.setState({lastName: e.target.value})}/>
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" placeholder="University Email" pattern=".+@u.rochester.edu|.+@rochester.edu" value={this.state.email}
                           onChange={e => this.setState({email: e.target.value})}/>
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input type="password" placeholder="Password" value={this.state.password}
                           onChange={e => this.setState({password: e.target.value})}/>
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input type="password" placeholder="Confirm Password" value={this.state.confirmPassword}
                           onChange={e => this.setState({confirmPassword: e.target.value})}/>
                </div>
                <div className="input-checkbox">
                    <input name="isAlumniBox" type="checkbox" value={this.state.isAlumni} onChange={e => this.setState({isAlumni: e.target.value})}/>
                    <label htmlFor="isAlumniBox">Are you an Alumni?</label>
                </div>
                <input type="submit" value="Sign Up" className="click-button"/>
                <p>{this.state.postResponse}</p>
            </form>
        )
    }
}

export default SignUp