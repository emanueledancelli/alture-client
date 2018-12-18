import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatDate, formatTitle } from "utils";
import { NoEvents } from "./NoEvents";
import "./CardList.scss";

import { Card } from "./Card.js";

export const CardList = ({ events }) => {
  const cardList = events.map(e => {
    return (
      <Link
        to={`/eventi/${e.id}/${formatTitle(e.title.rendered, "dash")}`}
        key={e.id}
      >
        <Card
          title={e.title.rendered}
          date={`${formatDate(e.acf.data_inizio)} ${e.acf.ora_inizio}`}
          end={e.acf.ora_fine}
          backgroundImage={e.acf.immagine.url}
          location={e.acf.luogo}
        />
      </Link>
    );
  });

  if (events.length === 0) {
    return <NoEvents />;
  }
  return <div className="cardlist">{cardList}</div>;
};

CardList.propTypes = {
  events: PropTypes.array.isRequired
};
