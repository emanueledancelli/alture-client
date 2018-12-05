import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { InfoOutlineIcon, NotificationsNoneIcon } from "mdi-react";
import Logo from "logo300x90.png";

export const Header = () => {
  
  return (
    <>
      <div className="header__container">
        <NavLink to="/informazioni">
          <InfoOutlineIcon className="header__icon" size={26} />
        </NavLink>
        <img src={Logo} alt="Logo" height="20px" />
        <NavLink to="/notifiche">
          <NotificationsNoneIcon className="header__icon" size={26} />
        </NavLink>
      </div>
    </>
  );
};
