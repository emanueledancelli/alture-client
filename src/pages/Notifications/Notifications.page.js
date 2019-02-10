import React, { Component } from "react";
import "./Notifications.page.scss";
import { askForNotificationPermission } from "push-notifications";
import { Animated, Seo, ScrollToTop, Hero, Header } from "components/common";

export class Notifications extends Component {
  state = {
    isItApple: false,
    permission: "default"
  };

  componentWillMount() {
    let not = Notification.permission;
    this.setState({
      permission: not
    });
  }

  componentDidMount() {
    let iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS) {
      this.setState({ isItApple: true });
    } else {
      return;
    }
  }

  handlePermissionStatus = status => {
    this.setState({
      permission: status
    });
  };

  render() {
    const { isItApple, permission } = this.state;
    let pickNotificationMsg;

    if (permission === "default") {
      pickNotificationMsg = (
        <>
          <p>Rimani aggiornato sulle attività di Alture</p>
          <button
            onClick={askForNotificationPermission}
            className="not__button"
          >
            Attiva le notifiche!
          </button>
        </>
      );
    }
    if (permission === "granted") {
      pickNotificationMsg = <p>Le notifiche sono attive!</p>;
    }
    if (permission === "denied") {
      pickNotificationMsg = (
        <>
          <p>Hai bloccato le notifiche.</p>
          <p>Sbloccale nelle impostazioni del tuo browser.</p>
        </>
      );
    }

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
          {isItApple ? (
            <p>Le notifiche non sono disponibili su iOS ;( </p>
          ) : (
            <>{pickNotificationMsg}</>
          )}
        </div>
      </Animated>
    );
  }
}
