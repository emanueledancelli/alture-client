import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './views/Home/Home'
import EventView from './views/EventView/EventView'
import Info from './views/Info/Info'
import MapComponent from './views/Map/MapComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ScrollToTop>
            <Route exact path="/" component={ Home } />
            <Route exact path="/info" component={ Info } />     
            <Route exact path="/mappa" component={ MapComponent } />
            <Route exact path="/eventi/:id" render={(routeProps) => <EventView {...routeProps} /> } /> 
          </ScrollToTop>         
        </div>
      </Router>
    );
  }
}

export default App;
