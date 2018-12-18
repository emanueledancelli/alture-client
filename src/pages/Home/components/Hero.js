import React, { Component } from "react";
import { ChevronDownIcon } from "mdi-react";
import Filter from "./Filter";
import "./Hero.scss";

export class Hero extends Component {
  state = {
    isScrolled: false,
    selectedValue: "",
    selectValues: ["In Arrivo", "Nuovi"]
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        isScrolled: true
      });
    } else {
      this.setState({
        isScrolled: false
      });
    }
  };

  handleSelect = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  render() {
    const { isScrolled } = this.state;

    return (
      <>
        <div className="filter__container">
          <h1>Eventi</h1>
          <Filter />
        </div>

        <div
          className={
            "filter__container--scrolled " + (isScrolled ? "" : "hide")
          }
        >
          <h1>Eventi</h1>
          <Filter />
        </div>
      </>
    );
  }
}
