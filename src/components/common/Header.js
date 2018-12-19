import React from "react";
import "./Header.scss";
import { NotificationsIcon } from "mdi-react";
import Logo from "logo.jpg";
import Facebook from "facebook-brands.svg";
import Instagram from "instagram-brands.svg";

export const Header = () => {
  return (
    <>
      <div className="header__container">
        <img src={Logo} alt="Logo" height="16px" />
        <div className="header__filter">
          <img
            src={Facebook}
            className="header__icon"
            alt="Facebook"
            height="20px"
            width="20px"
          />
          <img
            src={Instagram}
            className="header__icon"
            alt="Facebook"
            height="20px"
            width="20px"
          />
          <NotificationsIcon className="header__icon" size={20} />
        </div>
      </div>
    </>
  );
};
