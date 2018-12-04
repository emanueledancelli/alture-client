import React from "react";
import "./Card.scss";

import PlaceAndDate from "./PlaceAndDate";

const Card = props => {

  const background = {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + props.backgroundImage + ") center"
  }

  return (

    <div className="card" style={background}>
        <h1 style={{ maxWidth: 80 + "%" }} className="card-title white">
          {props.title}
        </h1>
        <div>
          <PlaceAndDate
            className="white"
            location={props.location}
            date={props.date}
            endDate={props.end}
          />
        </div>
      </div>
  );
};

export default Card;
