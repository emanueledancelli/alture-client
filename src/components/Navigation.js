import React from "react";
import "./Navigation.scss";
import posed from "react-pose";
import { NavLink } from "react-router-dom";
import { HomeOutlineIcon, MapOutlineIcon } from "mdi-react";

const Animated = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { ease: "easeOut", duration: 500 }
    }
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      y: { ease: "easeOut", duration: 500 }
    }
  }
});

export const Navigation = () => {
  return (
    <Animated>
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
          to="/Mappa"
          className="nav__link"
          activeClassName="nav__link--active"
          exact
        >
          <MapOutlineIcon className="nav__icon" size={26} />
          <span className="nav__text">Mappa</span>
        </NavLink>
      </div>
    </Animated>
  );
};
