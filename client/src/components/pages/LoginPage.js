import React, {Component} from 'react';
import '../../App.css';
import SignInSignUp from '../SignInSignUp';

class LoginPage extends Component{
    render() {
        return(
            <div>
                <SignInSignUp logIn={this.props.logIn}/>
            </div>
        )
    }
}

export default LoginPage