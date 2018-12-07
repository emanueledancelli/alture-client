import React, { Component } from "react";
import "./CardList.scss";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/it";

import { Card } from "./Card.js";

export class CardList extends Component {

  render() {

    const cardList = this.props.events.map(e => {
      
      const image = `${e.acf.immagine.url}`;
      const dataInizio = moment(e.acf.data_inizio).locale("it").format("MMMM D, YYYY")
      
      return (
        <Link to={`/eventi/${e.id}`} key={e.id}>
          <Card
            title={e.title.rendered}
            date={`${dataInizio} ${e.acf.ora_inizio}`}
            end={e.acf.ora_fine}
            backgroundImage={image}
            location={e.acf.luogo}
          />
        </Link>
      );
    });

    return (
      <div className="cardlist">
        {cardList}
      </div>
    );
  }
}

