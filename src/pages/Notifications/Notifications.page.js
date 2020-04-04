import React, { Component } from "react";
import "./Notifications.page.scss";
import { Animated, Seo, ScrollToTop, Hero, Header } from "components/common";

import { connect } from "react-redux";
import { setReloadStatus } from "actions/notActions";

class Notifications extends Component {
  state = {
    isItApple: false,
    permission: "default",
  };

  componentWillMount() {
    let not = Notification.permission;
    this.setState({
      permission: not,
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
  handlePermissionStatus = (status) => {
    this.setState({
      permission: status,
    });
  };

  render() {
    const { isItApple, permission } = this.state;
    let pickNotificationMsg;

    if (permission === "default") {
      pickNotificationMsg = (
        <>
          <p>Rimani aggiornato sulle attività di Alture</p>
          <div className="onesignal-customlink-container" />
          <p
            style={{
              color: "#999999",
              fontSize: "0.8em",
              textDecoration: "italic",
            }}
          >
            Se non compare il bottone per la sottoscrizione, ricarica la pagina!
          </p>
        </>
      );
    }
    if (permission === "granted") {
      pickNotificationMsg = (
        <>
          <p>Le notifiche sono attive!</p>
        </>
      );
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
      <>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reload: state.notifications.reload,
  };
};

const mapDispatchToProps = {
  setReloadStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
