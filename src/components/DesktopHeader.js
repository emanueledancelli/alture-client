import React from "react";
import "./DesktopHeader.scss";
import { NavLink, Link } from "react-router-dom";
import {
  InfoOutlineIcon,
  NotificationsNoneIcon,
  HomeOutlineIcon,
  FeedbackOutlineIcon,
} from "mdi-react";
import Logo from "../assets/logoMarzo.png";

export const DesktopHeader = () => {
  return (
    <>
      <div className="dheader__container">
        <Link to="/">
          <img src={Logo} alt="Logo" height="40px" />
        </Link>
        <div className="dheader__menu">
          <div className="dheader__menu__item">
            <NavLink
              to="/"
              className="dheader__link"
              activeClassName="dheader__link--active"
              exact
            >
              <HomeOutlineIcon className="dheader__icon" size={22} />
              <span className="dheader__text">Home</span>
            </NavLink>
          </div>
          <div className="dheader__menu__item">
            <NavLink
              to="/edizione"
              className="dheader__link"
              activeClassName="dheader__link--active"
              exact
            >
              <InfoOutlineIcon className="dheader__icon" size={22} />
              <span className="dheader__text">Info</span>
            </NavLink>
          </div>
          <div className="dheader__menu__item">
            <NavLink
              to="/notifiche"
              className="dheader__link"
              activeClassName="dheader__link--active"
              exact
            >
              <NotificationsNoneIcon className="dheader__icon" size={22} />
              <span className="dheader__text">Notifiche</span>
            </NavLink>
          </div>
          <div className="dheader__menu__item">
            <NavLink
              to="/feedback"
              className="dheader__link"
              activeClassName="dheader__link--active"
              exact
            >
              <FeedbackOutlineIcon className="dheader__icon" size={22} />
              <span className="dheader__text">Feedback</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
