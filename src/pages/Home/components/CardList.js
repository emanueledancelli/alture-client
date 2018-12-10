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
      const formatTitle = e.title.rendered.replace(/[^A-Z0-9]+/ig, "-");
      
      return (
        <Link to={`/eventi/${e.id}/${formatTitle}`} key={e.id}>
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
      <div className="cardlist" style={this.props.style}>
        {cardList}
      </div>
    );
  }
}

