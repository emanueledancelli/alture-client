import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CloseCircleOutlineIcon } from "mdi-react";
import Filter from "../../pages/Home/components/Filter";
import "./Hero.scss";

const CloseButton = () => {
  return (
    <Link to="/informazioni">
      <CloseCircleOutlineIcon className="header__icon" size={26} />
    </Link>
  );
};

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
    const { title, filter, close, hasBorder } = this.props;
    const bottomBorder = {
      borderBottom: "0.5px solid rgba(0,0,0,0.1)"
    };

    return (
      <>
        <div style={hasBorder && bottomBorder} className="filter__container">
          <h1>{title}</h1>
          {filter && <Filter />}
        </div>

        <div
          className={
            "filter__container--scrolled " + (isScrolled ? "" : "hide")
          }
        >
          <h1>{title}</h1>
          {filter && <Filter />}
          {close && <CloseButton />}
        </div>
      </>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.bool,
  close: PropTypes.bool,
  hasBorder: PropTypes.bool
};
