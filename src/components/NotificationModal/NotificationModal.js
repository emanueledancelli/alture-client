import React, { Component } from "react";
import styled, { css, keyframes } from "react-emotion";

import Shade from "../Shade/Shade";

class NotificationModal extends Component {

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

    const white = css`
          background-color: white;
          position: fixed;
          top:0;
          left:0;
          height: 100vh;
          width: 100%;
    `

    return (
      <div className={white}>
          <div className="onesignal-customlink-container"></div>        
      </div>
    );
  }
}

export default NotificationModal;
