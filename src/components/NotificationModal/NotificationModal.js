import React, { Component } from "react";
import styled, { css, keyframes } from "react-emotion";

import Shade from "../Shade/Shade";

class NotificationModal extends Component {
  state = {
    isNotificationOn: false
  };

  handleNotification = () => {
    this.setState({
      isNotificationOn: !this.state.isNotificationOn
    });
  };

  render() {
    const slideIn = keyframes`
          from {
              opacity: 0;
              transform: translateY(20px);
          }
          to {
              opacity: 1;
              transform: translateY(0);
          }
      `;

    const Container = styled("div")`
      background-color: #fff;
      border-radius: 10px;
      -webkit-box-shadow: 0px 2px 6px -2px rgba(10, 21, 60, 1);
      -moz-box-shadow: 0px 2px 6px -2px rgba(10, 21, 60, 1);
      box-shadow: 0px 2px 6px -2px rgba(10, 21, 60, 1);
      display: flex;
      padding: 5%;
      flex-direction: column;
      z-index: 100;
      animation: ${slideIn} 0.5s ease-in;
    `;
    const Center = css`
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const redPlease = css`
      color: #eb5757;
      font-weight: 700;
    `;

    return (
      <Shade className={Center} onClick={this.props.onClick}>
        {this.state.isNotificationOn ? (
          <Container>
            <p>Le notifiche sono attivate</p>
            <p className={redPlease} onClick={this.handleNotification}>
              DISATTIVA LE NOTIFICHE
            </p>
          </Container>
        ) : (
          <Container>
            <p>Rimani aggiornato sulle attività di Alture360</p>
            <p className={redPlease} onClick={this.handleNotification}>
              ATTIVA LE NOTIFICHE
            </p>
          </Container>
        )}
      </Shade>
    );
  }
}

export default NotificationModal;
