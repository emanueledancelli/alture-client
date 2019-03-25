import React from "react";
import "./LoadableLoader.scss";
import logo from "assets/logo.png";
import line from "assets/line.png";

const LoadableLoader = () => {
  return (
    <div className="load__container">
      <img className="load__logo" height="35px" src={logo} alt="" />
      <img className="load__line" height="10px" src={line} alt="" />
    </div>
  );
};

export default LoadableLoader;
