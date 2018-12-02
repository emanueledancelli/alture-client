import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "react-emotion";
import moment from "moment";
import "moment/locale/it";

import Card from "../Card/Card.js";
import withEvents from "../../hoc/withEvents";

class CardList extends Component {
  render() {
    const Container = styled("div")`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 11vh;
    `;

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

    return <Container>{cardList}</Container>;
  }
}

export default withEvents(CardList);
