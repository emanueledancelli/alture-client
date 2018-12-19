import React from "react";
import "./Header.scss";
import { NotificationsIcon } from "mdi-react";
import Logo from "logo.jpg";
import Facebook from "facebook-brands.svg";
import Instagram from "instagram-brands.svg";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logo" height="16px" />
        <div className="header__links">
          <a
            href="https://www.facebook.com/A.Alture/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              className="header__icon"
              alt="Facebook"
              height="20px"
              width="20px"
            />
          </a>
          <a
            href="https://www.instagram.com/a.alture/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram}
              className="header__icon"
              alt="Facebook"
              height="20px"
              width="20px"
            />
          </a>
          <NotificationsIcon className="header__icon" size={20} />
        </div>
      </div>
    </>
  );
};
