import React, { Component } from 'react';
import styled, {css} from 'react-emotion';
import { HamburgerMenuIcon, NotificationsNoneIcon } from 'mdi-react';
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

class AppHeader extends Component {
  state = {
    isMenuOpen: false,
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

  MenuHandler = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    const { isMenuOpen, isScrolled } = this.state
    
    const container = css`
      position: fixed;
      top: 0;
      left: 0;
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
      color: #728DC3;
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
