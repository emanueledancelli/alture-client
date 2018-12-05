import React, { Component } from "react";
import CardList from "./components/CardList";
import Logo from "logo.png";
import { Seo } from "components/common";

export class Home extends Component {
  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <Seo 
          title="Home - Alture"
          description="Homepage dell'iniziativa Alture" 
          url="https://alture.org" 
          image={Logo}
        />

        <CardList />
      </>
    );
  }
}

