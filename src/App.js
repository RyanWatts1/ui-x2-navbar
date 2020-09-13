import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/index.js';
import Home from './Home.js';
import About from './About.js';
import NoMatch from './NoMatch.js';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Sidebar />
      <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route component={NoMatch} />
</Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
