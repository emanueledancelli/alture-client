import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";

import Home from "./pages/Home/Home.page";
import EventView from "./pages/Event/Event.page";
import Info from "./pages/Info/Info.page";
import Privacy from "./pages/Privacy/Privacy.page";
import Notifications from "./pages/Notifications/Notifications.page";
import MapComponent from "./pages/Map/Map.page";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import DesktopHeader from "./components/DesktopHeader"

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
              <DesktopHeader />
              { location.pathname.startsWith("/eventi/") 
                || location.pathname.startsWith("/informazioni")
                || location.pathname.startsWith("/privacypolicy")
                || location.pathname.startsWith("/notifiche") ? null : (
                <Header />
              )}

              {AllRoutes(location)}

              { location.pathname.startsWith("/eventi/") 
                || location.pathname.startsWith("/informazioni")
                || location.pathname.startsWith("/privacypolicy")
                || location.pathname.startsWith("/notifiche") ? null : (
                <Navigation />
              )}
            </div>
          )}
        />
      </Provider>
    );
  }
}

export default App;
