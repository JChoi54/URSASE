import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
