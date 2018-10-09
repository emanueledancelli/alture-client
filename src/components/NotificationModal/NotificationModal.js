import React from "react";
import styled, { css, keyframes } from "react-emotion";

import Shade from "../Shade/Shade";

const NotificationModal = props => {
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
    padding: 2%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 100;
    animation: ${slideIn} 0.5s ease-in;
  `;
  const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Shade className={Center} onClick={props.onClick}>
      <Container>
        <div className="onesignal-customlink-container" />
      </Container>
    </Shade>
  );
};

export default NotificationModal;
