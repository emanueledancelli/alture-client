import React from "react";
import "./Navigation.scss";
import posed from "react-pose";
import { NavLink } from "react-router-dom";
import { HomeOutlineIcon, InfoOutlineIcon } from "mdi-react";

const Animated = posed.div({
  enter: {
    x: 0,
    transition: {
      x: { ease: "linear", duration: 200, stagger: false }
    }
  },
  exit: {
    opacity: 1,
    x: "100%",
    transition: {
      x: { ease: "linear", duration: 200, stagger: false }
    }
  }
});

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
