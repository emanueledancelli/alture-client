import React, { Component } from "react";
import withEvents from "hoc/withEvents";
import CardList from "./components/CardList";
import { Seo, ScrollToTop } from "components/common";

import Logo from "logo.png";

class Home extends Component {

  render() {
    return (
      <>

        <ScrollToTop />

        <Seo 
          title="Home - Alture"
          description="Homepage dell'iniziativa Alture" 
          url="https://alture.org" 
          image={Logo}
        />

        <CardList 
          events={this.props.events}
        />
      
      </>
    );
  }
}

export default withEvents(Home);