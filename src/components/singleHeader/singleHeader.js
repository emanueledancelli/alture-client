import React, { Component } from 'react';
import { css } from 'react-emotion';
import { KeyboardBackspaceIcon, ShareVariantIcon } from 'mdi-react';

import Sharer from '../Sharer/Sharer'

class SingleHeader extends Component {
  state = {
    isSharingOpen: false,
    isScrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if(window.scrollY > 0) {
      this.setState({
        isScrolled: true
      })
    }
    else {
      this.setState({
        isScrolled: false
      })
    }
  }

  shareButtonHandler = () => {
    this.setState({ 
      isSharingOpen: !this.state.isSharingOpen 
    })
  }

  sharerComponentHandler = () => {
    this.setState({
      isSharingOpen: false
    })
  }

  render() {
    const { isSharingOpen, isScrolled } = this.state

    const container = css`
      display: flex;
      position: fixed;
      top: 0;
      flex-direction: row;
      width: 100%;
      height: 14vh;
      background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://api.dancel.li${this.props.image}) center;
      justify-content: space-around;
      align-items: center;
      color: transparent;
      transition: all 0.3s ease-in;
      z-index: 97;
    `
    const IconStyle = css`
      color: #FFF;
      transition: all 0.3s ease-in;
    `
    const scrolledDiv = css`
      height: 10vh !important;
      background: white !important;
      color: #333 !important;
      font-size: 0.9em;
      font-weight: 600;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,1.2);
      -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
      box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
      & svg {
        color: #333;
      }
    `

      return (
        <React.Fragment>
          <div 
            className={container + " " + (isScrolled
                       ? scrolledDiv
                       : "" )}>
            <div onClick={this.props.onClick}>
                <KeyboardBackspaceIcon 
                  className={ IconStyle } 
                  size={(isScrolled
                         ? 26
                         : 35)}
                />
            </div>
            <div>
              <span>{this.props.name}</span>
            </div>
            <div onClick={this.shareButtonHandler}>
                <ShareVariantIcon 
                  className={ IconStyle } 
                  size={(isScrolled
                    ? 26
                    : 35)}
                />
            </div>
          </div>
          {isSharingOpen 
            ? <Sharer url={this.props.url} onClick={this.sharerComponentHandler} />
            : null
          }
        </React.Fragment>
      );
    }
}

export default SingleHeader;
