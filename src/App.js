import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import ResumePage from './components/pages/ResumePage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/resumes" exact component={ResumePage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
