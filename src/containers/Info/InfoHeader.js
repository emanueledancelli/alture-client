import React, {Component} from 'react';
import {css} from 'react-emotion';
import { CloseCircleOutlineIcon } from "mdi-react";


class InfoHeader extends Component {
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

    render() {
        const { isScrolled } = this.state;
    
        const header = css`
        display: flex;
        height: 14vh;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease-in;
        & span {
            opacity: 0;
        }
        & svg {
            color: #bdbdbd;
        }
        @media (min-width: 740px) {
          display: none;
        }
    `
    const scrolled = css`
      height: 10vh !important;
      background: white !important;
      width: 100%;
      color: #333333 !important;
      font-size: 1em;
      font-weight: 400;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 1.2);
      -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
      & span {
          opacity: 1;
          color: #333333;
      }
      & svg {
        color: #333333;
      }
    `
    const paddingFixLeft = css`
      padding-left: 5%;
    `

    const iconStyle = css`
        transition: all 0.3s ease-in;
        padding-right: 5%;
        & svg {
            color: #454545;
          }
    `;
        return (
            <React.Fragment>
                <div className={header + " " + (isScrolled ? scrolled : "")}>
                    <span className={paddingFixLeft}>{this.props.pageTitle}</span>
                    <div></div>
                     <CloseCircleOutlineIcon
                        className={iconStyle} 
                        onClick={this.props.onClick} 
                        size={isScrolled ? 30 : 35}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default InfoHeader;