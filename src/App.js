import React from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import './App.css';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './views/Home/Home'
import EventView from './views/EventView/EventView'
import MapComponent from './views/Map/MapComponent';


const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

/* class App extends Component {
  render() {
    return (
      <Router>

          <div className="App">

            <ScrollToTop>
              <Route exact path="/" component={ Home } />
              <Route exact path="/mappa" component={ MapComponent } />
              <Route exact path="/eventi/:id" render={(routeProps) => <EventView {...routeProps} /> } /> 
            </ScrollToTop>         
      
          </div>

      </Router>
    );
  }
} */

const App = () => (
  <Route
    onUpdate={() => window.scrollTo(0, 0)}
    render={({ location }) => (
      <div className="App">

          <PoseGroup>
            <RouteContainer key={location.key}>
              <Switch location={location}>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/mappa" component={ MapComponent } />
                  <Route exact path="/eventi/:id" render={(routeProps) => <EventView {...routeProps} /> } /> 
              </Switch>
            </RouteContainer>
          </PoseGroup>

      </div>
    )}
  />
);


export default App;
