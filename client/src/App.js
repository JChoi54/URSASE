import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import MembersPage from './components/pages/MembersPage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';
import ProfilePage from './components/pages/ProfilePage';
import EditProfilePage from './components/pages/EditProfilePage';
import ChangePasswordPage from './components/pages/ChangePasswordPage';
import UploadResumePage from './components/pages/UploadResumePage';
import UploadProjectsPage from './components/pages/UploadProjectsPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Authentication
import IsAuthenticated from './components/IsAuthenticated'
import Logout from './components/pages/Logout';

class App extends Component {
    state = {
        authenticated: false
    }

    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    logIn = () => {
        this.setState({authenticated: true})
    }

    logOut = () => {
        this.setState({authenticated: false})
    }

    componentDidMount() {
        fetch('/api/checkToken')
            .then(res => {
                if (res.status === 200) {
                    this.setState({authenticated: true})
                } else if (res.status === 401) {
                    this.setState({authenticated: false})
                }
            })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar authenticated={this.state.authenticated}/>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/members" exact component={IsAuthenticated(MembersPage)}/>
                        <Route path="/contact" exact component={ContactPage}/>
                        <Route path="/login" exact component={() => <LoginPage logIn={this.logIn}/>}/>
                        <Route path="/logout" exact component={() => <Logout logOut={this.logOut}/>}/>
                        <Route path="/profile" component={IsAuthenticated(ProfilePage)}/>
                        <Route path="/editprofile" component={IsAuthenticated(EditProfilePage)}/>
                        <Route path="/changepassword" component={IsAuthenticated(ChangePasswordPage)}/>
                        <Route path="/uploadresume" component={IsAuthenticated(UploadResumePage)}/>
                        <Route path="/uploadprojects" component={IsAuthenticated(UploadProjectsPage)}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
