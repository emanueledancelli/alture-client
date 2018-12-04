import React, { Component } from "react";
import { css } from "react-emotion";
import { ChevronLeftIcon, ShareVariantIcon } from "mdi-react";

import Sharer from "./Sharer";

class SingleHeader extends Component {
  state = {
    isSharingOpen: false,
    isScrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        isScrolled: true
      });
    } else {
      this.setState({
        isScrolled: false
      });
    }
  };

  shareButtonHandler = () => {
    this.setState({
      isSharingOpen: !this.state.isSharingOpen
    });
  };

  sharerComponentHandler = () => {
    this.setState({
      isSharingOpen: false
    });
  };

  render() {
    const { isSharingOpen, isScrolled } = this.state;

    const container = css`
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.6;
      flex-direction: row;
      width: 100%;
      height: 14vh;
      justify-content: space-around;
      align-items: center;
      background-color: transparent;
      color: transparent;
      transition: all 0.3s ease-in;
      z-index: 97;
      @media (min-width: 740px) {
        display: none;
      }
    `;
    const IconStyle = css`
      color: #fff;
      transition: all 0.3s ease-in;
    `;
    const scrolledDiv = css`
      height: 10vh !important;
      background: white !important;
      color: #333333 !important;
      opacity: 1 !important;
      font-size: 1em;
      font-weight: 700;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
      & svg {
        color: #333333;
      }
    `;

    return (

      <React.Fragment>

        <div className={container + " " + (isScrolled ? scrolledDiv : "")}>
          <div onClick={this.props.onClick}>
            <ChevronLeftIcon className={IconStyle} size={isScrolled ? 40 : 45} />
          </div>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div onClick={this.shareButtonHandler}>
            <ShareVariantIcon className={IconStyle} size={isScrolled ? 26 : 30} />
          </div>
        </div>

        { isSharingOpen && <Sharer url={this.props.url} onClick={this.sharerComponentHandler} /> }
      
      </React.Fragment>

    );
  }
}

export default SingleHeader;
