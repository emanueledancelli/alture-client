import React from "react";
import PropTypes from "prop-types";
import { CardDetails } from "./CardDetails";
import LazyLoad from "react-lazyload";

import "./Card.scss";

export const Card = ({ backgroundImage, title, location, date, end }) => {
  const background = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
      backgroundImage +
      ") center",
    backgroundSize: "cover"
  };

  return (
    <LazyLoad height={200} offset={100}>
      <div className="card" style={background}>
        <h1 style={{ maxWidth: 80 + "%" }} className="card-title white">
          {title}
        </h1>
        <div>
          <CardDetails location={location} date={date} endDate={end} />
        </div>
      </div>
    </LazyLoad>
  );
};

Card.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};
