import React, { Component } from "react";
import CardList from "./components/CardList";

class Home extends Component {
  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <React.Fragment>
        <CardList />
      </React.Fragment>
    );
  }
}

export default Home;
