import React, { Component } from "react";
import PropTypes from "prop-types";
import Filter from "../../pages/Home/components/Filter";
import "./Hero.scss";

export class Hero extends Component {
  state = {
    isScrolled: false
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

  render() {
    const { isScrolled } = this.state;
    const { title, filter } = this.props;

    return (
      <>
        <div className="filter__container">
          <h1>{title}</h1>
          {filter ? <Filter /> : null}
        </div>

        <div
          className={
            "filter__container--scrolled " + (isScrolled ? "" : "hide")
          }
        >
          <h1>{title}</h1>
          {filter ? <Filter /> : null}
        </div>
      </>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  hasFilter: PropTypes.bool
};
