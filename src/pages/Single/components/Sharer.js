import React from "react";
import "./Sharer.scss";
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
import Modal from "components/common/Modal";

import { Shade } from "./Shade";

export const Sharer = props => (
  <Modal>
    <Shade action={props.onClick}>
      <div className="sharer__container">
        <div>
          <FacebookShareButton className="sharer__icon" url={props.url}>
            <FacebookIcon size={40} round />
            <p>Facebook</p>
          </FacebookShareButton>
          <WhatsappShareButton className="sharer__icon" url={props.url}>
            <WhatsappIcon size={40} round />
            <p>WhatsApp</p>
          </WhatsappShareButton>
        </div>
        <div>
          <TelegramShareButton className="sharer__icon" url={props.url}>
            <TelegramIcon size={40} round />
            <p>Telegram</p>
          </TelegramShareButton>
          <EmailShareButton className="sharer__icon" url={props.url}>
            <EmailIcon size={40} round />
            <p>Email</p>
          </EmailShareButton>
        </div>
      </div>
    </Shade>
  </Modal>
);
