import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDate, formatTitle } from "utils";
import "./CardList.scss";

import { Card } from "./Card.js";

export class CardList extends Component {
  render() {
    const cardList = this.props.events.map(e => {
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

    return <div className="cardlist">{cardList}</div>;
  }
}
