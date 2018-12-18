import React from "react";
import "./Header.scss";

export const Header = ({ UpcomingClickHandler, PastClickHandler }) => {
  return (
    <>
      <div className="header__container">
        <h1>Eventi</h1>
        <div className="header__filter">
          <p
            className="header__filter--border-right"
            onClick={UpcomingClickHandler}
          >
            In arrivo
          </p>
          <p className="header__filter--border-left" onClick={PastClickHandler}>
            Passati
          </p>
        </div>
      </div>
    </>
  );
};
