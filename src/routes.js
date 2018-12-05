import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "pages/Home";
import { Event } from "pages/Event";
import { Info } from "pages/Info";
import { Privacy } from "pages/Privacy";
import { Notifications }  from "pages/Notifications";
import { Map } from "pages/Map";

export const Routes = location => {
    return (
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/mappa" component={Map} />
          <Route exact path="/informazioni" component={Info} />
          <Route exact path="/privacypolicy" component={Privacy} />
          <Route exact path="/notifiche" component={Notifications} />
          <Route
            exact
            path="/eventi/:id"
            render={routeProps => <Event {...routeProps} />}
          />
        </Switch>
      );
}