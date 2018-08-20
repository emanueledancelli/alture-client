import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AppNavigation from './components/appNavigation/appNavigation'

import Home from './views/Home/Home'
import Map from './views/Map/Map'
import SingleEvent from './views/SingleEvent/SingleEvent'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={ Home } />
            <Route exact path="/mappa" component={ Map } />
            <Route exact path="/eventi/:id" render={(routeProps) => <SingleEvent {...routeProps} /> } />          
          <AppNavigation />
        </div>
      </Router>
    );
  }
}

export default App;
