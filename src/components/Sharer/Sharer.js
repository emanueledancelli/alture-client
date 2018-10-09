import React from "react";
import styled, { css, keyframes } from "react-emotion";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon
} from "react-share";

import Shade from "../Shade/Shade";

const Sharer = props => {
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
  const IconSpacing = css`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Paragraph = styled("span")`
    font-weight: 600;
    font-size: 1em;
    color: #333333;
    margin-top: 10px;
  `;

  return (
    <Shade className={Center} onClick={props.onClick}>
      <Container>
        <div>
          <FacebookShareButton className={IconSpacing} url={props.url}>
            <FacebookIcon size={40} round />
            <Paragraph>Facebook</Paragraph>
          </FacebookShareButton>
          <WhatsappShareButton className={IconSpacing} url={props.url}>
            <WhatsappIcon size={40} round />
            <Paragraph>WhatsApp</Paragraph>
          </WhatsappShareButton>
        </div>
        <div>
          <TelegramShareButton className={IconSpacing} url={props.url}>
            <TelegramIcon size={40} round />
            <Paragraph>Telegram</Paragraph>
          </TelegramShareButton>
          <EmailShareButton className={IconSpacing} url={props.url}>
            <EmailIcon size={40} round />
            <Paragraph>Email</Paragraph>
          </EmailShareButton>
        </div>
      </Container>
    </Shade>
  );
};

export default Sharer;
