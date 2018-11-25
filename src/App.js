import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Home from "./containers/Home/Home";
import EventView from "./containers/EventView/EventView";
import Info from "./containers/Info/Info";
import MapComponent from "./containers/Map/MapComponent";
import AppHeader from "./components/AppHeader/AppHeader";
import AppNavigation from "./components/AppNavigation/AppNavigation";
import NotificationModal from "./components/NotificationModal/NotificationModal";

const AllRoutes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/mappa" component={MapComponent} />
      <Route exact path="/informazioni" component={Info} />
      <Route
        exact
        path="/eventi/:id"
        render={routeProps => <EventView {...routeProps} />}
      />
    </Switch>
  );
};

class App extends Component {
  state = {
    isNotificationModalVisible: false
  };

  handleNotificationPanel = () => {
    this.setState({
      isNotificationModalVisible: !this.state.isNotificationModalVisible
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          render={({ location }) => (
            <div className="App">
              {location.pathname.startsWith("/eventi/") || location.pathname.startsWith("/informazioni") ? null : (
                <AppHeader
                  handleNotificationPanel={this.handleNotificationPanel}
                />
              )}

              {AllRoutes(location)}

              {location.pathname.startsWith("/eventi/") || location.pathname.startsWith("/informazioni") ? null : (
                <AppNavigation />
              )}

              {this.state.isNotificationModalVisible && (
                <NotificationModal onClick={this.handleNotificationPanel} />
              )}
            </div>
          )}
        />
      </Provider>
    );
  }
}

export default App;
