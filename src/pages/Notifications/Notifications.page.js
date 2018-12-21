import React, { Component } from "react";
import "./Notifications.page.scss";
import posed from "react-pose";
import { Seo, ScrollToTop, Hero, Header } from "components/common";
import Logo from "logo.png";

const Animated = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { ease: "easeOut", duration: 400 }
    }
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      y: { ease: "easeOut", duration: 400 }
    }
  }
});

export class Notifications extends Component {
  componentDidMount() {
    this.initOneSignal("mount");
  }

  scrollToTop = () => window.scrollTo(0, 0);

  initOneSignal = () => {
    var SDK = document.createElement("script");
    SDK.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
    var script = document.createElement("script");
    script.text =
      'var OneSignal = window.OneSignal || [];\r\n  OneSignal.push(function() {\r\n    OneSignal.init({\r\n      appId: "b80e7963-2d68-4e15-ad8d-c79702ee21e6",\r\n    });\r\n  });';

    document.head.appendChild(SDK);
    document.head.appendChild(script);
  };

  render() {
    return (
      <Animated>
        <ScrollToTop />
        <Seo
          title="Notifiche - Alture"
          description="Rimani aggiornato sull'attività di Alture con le notifiche"
          url="https://alture.org/notifiche"
          image={Logo}
        />
        <Header close />
        <Hero close hasBorder title="Notifiche" />

        <div className="not__body">
          <div className="onesignal-customlink-container" />
        </div>
      </Animated>
    );
  }
}
