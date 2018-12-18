import React from "react";
import "./Header.scss";
import { NotificationsIcon } from "mdi-react";
import Logo from "logo.jpg";

export const Header = ({ UpcomingClickHandler, PastClickHandler }) => {
  return (
    <>
      <div className="header__container">
        <img src={Logo} alt="Logo" height="16px" />
        <div className="header__filter">
          <span
            className="header__filter--border-right"
            onClick={UpcomingClickHandler}
          >
            Fb
          </span>
          <span
            className="header__filter--border-left"
            onClick={PastClickHandler}
          >
            Ig
          </span>
          <NotificationsIcon className="header__icon" size={20} />
        </div>
      </div>
    </>
  );
};
