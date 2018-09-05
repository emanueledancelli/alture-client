import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PoseGroup } from 'react-pose'
import './App.css';

import Home from './views/Home/Home'
import EventView from './views/EventView/EventView'
import MapComponent from './views/Map/MapComponent';
import AppHeader from './components/AppHeader/AppHeader';
import AppNavigation from './components/AppNavigation/AppNavigation';
import InfoModal from './components/InfoModal/InfoModal';

const AllRoutes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={ Home } />
      <Route exact path="/mappa" component={ MapComponent } />
      <Route exact path="/eventi/:id" render={(routeProps) => <EventView {...routeProps} /> } /> 
    </Switch>
  )
}

class App extends Component {
  state = {
    isVisible: false
  }

  handleModal = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        render={({ location }) => (

          <div className="App">
            
            {location.pathname.startsWith('/eventi/') ? null : <AppHeader handleModal={this.handleModal} />}
              
              {AllRoutes(location)}
            
            {location.pathname.startsWith('/eventi/') ? null : <AppNavigation />}
            
            {this.state.isVisible 
              && <InfoModal 
                    isVisible={this.state.isVisible}
                    closeModal={this.handleModal}  />
            }

          </div>
          
        )}
      />
    );
  }
}


export default App;
