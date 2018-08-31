import React, { Component } from 'react';
import {css} from 'react-emotion';
import { HamburgerMenuIcon, NotificationsNoneIcon } from 'mdi-react';
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

class AppHeader extends Component {
  state = {
    isMenuOpen: false,
  }

  MenuHandler = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    const { isMenuOpen, isScrolled } = this.state
    
    const container = css`
      display: flex;
      flex-direction: row;
      width: 100%;
      background-color: white;
      height: 14vh;
      justify-content: space-around;
      align-items: center;
      color: #333;
      font-size: 1.3em;
      transition: all 0.3s ease-in;
    `
    const IconStyle = css`
      color: #B8C6E1;
    `
    const scrolledDiv = css`
      height: 10vh;
      & span {
        font-size: 0.9em;
      }
    `
  
    return (
      <React.Fragment>
         <div 
            className={container + " " + (isScrolled
                       ? scrolledDiv
                       : "" )}>
          <div onClick={this.MenuHandler}>
            <HamburgerMenuIcon className={ IconStyle } size={26}/>
          </div>
          <Logo />
          <div>
            <NotificationsNoneIcon className={ IconStyle } size={26} />
          </div>
        </div>
        {isMenuOpen
          ? <Menu handleCloseMenu={this.MenuHandler}/>
          : null
        }
      </React.Fragment>
    );
  }
}

export default AppHeader;
