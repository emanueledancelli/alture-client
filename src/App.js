import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Home from "./containers/Home/Home";
import EventView from "./containers/EventView/EventView";
import Info from "./containers/Info/Info";
import Privacy from "./containers/Privacy/Privacy";
import Notifications from "./containers/Notifications/Notifications";
import MapComponent from "./containers/Map/MapComponent";
import AppHeader from "./components/AppHeader/AppHeader";
import AppNavigation from "./components/AppNavigation/AppNavigation";

const AllRoutes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/mappa" component={MapComponent} />
      <Route exact path="/informazioni" component={Info} />
      <Route exact path="/privacypolicy" component={Privacy} />
      <Route exact path="/notifiche" component={Notifications} />
      <Route
        exact
        path="/eventi/:id"
        render={routeProps => <EventView {...routeProps} />}
      />
    </Switch>
  );
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          render={({ location }) => (
            <div className="App">
              { location.pathname.startsWith("/eventi/") 
                || location.pathname.startsWith("/informazioni")
                || location.pathname.startsWith("/privacypolicy")
                || location.pathname.startsWith("/notifiche") ? null : (
                <AppHeader />
              )}

              {AllRoutes(location)}

              { location.pathname.startsWith("/eventi/") 
                || location.pathname.startsWith("/informazioni")
                || location.pathname.startsWith("/privacypolicy")
                || location.pathname.startsWith("/notifiche") ? null : (
                <AppNavigation />
              )}
            </div>
          )}
        />
      </Provider>
    );
  }
}

export default App;
