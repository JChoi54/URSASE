import React, {Component} from 'react';
import './SignInSignUp.css';
import '../App.css';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        postResponse: '',
    }

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
        });
        const body = await response.text();
        this.setState({postResponse: body})
    }

    render() {
        return (
            <form action="#" className="signin-form" onSubmit={this.handleSubmit}>
                <h2>Log In</h2>
                <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="text" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                </div>
                <input type="submit" value="Login" className="click-button"/>
                <p>{this.state.postResponse}</p>
            </form>
        );
    }
}

export default SignIn