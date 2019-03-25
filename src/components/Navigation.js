import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { HomeOutlineIcon, InfoOutlineIcon } from "mdi-react";

export const Navigation = () => {
  return (
    <div className="nav__container">
      <NavLink
        to="/"
        className="nav__link"
        activeClassName="nav__link--active"
        exact
      >
        <HomeOutlineIcon className="nav__icon" size={26} />
        <span className="nav__text">Home</span>
      </NavLink>

      <NavLink
        to="/informazioni"
        className="nav__link"
        activeClassName="nav__link--active"
        exact
      >
        <InfoOutlineIcon className="nav__icon" size={26} />
        <span className="nav__text">Info</span>
      </NavLink>
    </div>
  );
};
