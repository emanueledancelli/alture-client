import React, { Component } from "react";
import "./TopBar.scss"
import { ChevronLeftIcon, ShareVariantIcon } from "mdi-react";

import { Sharer } from "./Sharer"

export class TopBar extends Component {
  state = {
    isSharingOpen: false,
    isScrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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

    return (

      <>

        <div className={"topbar__container " + (isScrolled ? "topbar__scrolled" : "")}>
          <div onClick={this.props.onClick}>
            <ChevronLeftIcon className="topbar__icon" size={isScrolled ? 40 : 45} />
          </div>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div onClick={this.shareButtonHandler}>
            <ShareVariantIcon className="topbar__icon" size={isScrolled ? 26 : 30} />
          </div>
        </div>

        { isSharingOpen && <Sharer url={this.props.url} onClick={this.sharerComponentHandler} /> }
      
      </>

    );
  }
}

