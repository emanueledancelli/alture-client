import React from "react";
import styled, { css } from "react-emotion";

import PlaceAndDate from "../PlaceAndDate/PlaceAndDate";

const Card = props => {
  const Container = styled("div")`
    min-height: 200px;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    z-index: -99;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 3px 4px 20px -4px rgba(0, 0, 0, 0.8);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${props.backgroundImage}) center;
  `;
  const header = css`
    max-width: 80%;
  `;

  return (
    <Container>
      <h1 style={{ maxWidth: 80 + "%" }} className="title white">
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
    </Container>
  );
};

export default Card;
