import React, { Component } from 'react';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    // TODO: Write any code that requires fetching to API here.
    // To call API, use the function fetch(<API URL>).then(res => res.text())
  }

  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/members" exact component={MembersPage} />
              <Route path="/contact" exact component={ContactPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/editprofile" component={EditProfilePage} />
              <Route path="/changepassword" component={ChangePasswordPage} />
              <Route path="/uploadresume" component={UploadResumePage} />
              <Route path="/uploadprojects" component={UploadProjectsPage} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
