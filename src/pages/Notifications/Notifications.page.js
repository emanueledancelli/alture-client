import React, { Component } from "react";
import "./Notifications.page.scss";
import { askForPermissioToReceiveNotifications } from "push-notifications";
import { Animated, Seo, ScrollToTop, Hero, Header } from "components/common";

export class Notifications extends Component {
  render() {
    return (
      <Animated>
        <ScrollToTop />
        <Seo
          title="Notifiche - Alture"
          description="Rimani aggiornato sull'attività di Alture con le notifiche"
          url="https://alture.org/notifiche"
        />
        <Header close />
        <Hero close hasBorder title="Notifiche" />

        <div className="not__body">
          <button onClick={askForPermissioToReceiveNotifications}>
            Premi qui per attivare le notifiche
          </button>
        </div>
      </Animated>
    );
  }
}
