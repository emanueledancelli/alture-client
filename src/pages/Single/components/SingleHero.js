import React from "react";
import "./SingleHero.scss";
import LazyLoad from "react-lazyload";

export const SingleHero = ({ image, title }) => {
  const background = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
      image +
      ") center top",
    backgroundSize: "cover"
  };

  return (
    <LazyLoad>
      <div style={background} className="ehero__container">
        <div className="ehero__paddings">
          <h1 className="title white">{title}</h1>
        </div>
      </div>
    </LazyLoad>
  );
};
