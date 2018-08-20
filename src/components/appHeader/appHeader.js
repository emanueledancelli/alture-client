import React, { Component } from 'react';
import './appHeader.css';
import { Link } from 'react-router-dom'

import { AddIcon, NotificationsIcon } from 'mdi-react';

import SideMenu from '../SideMenu/SideMenu'

class AppHeader extends Component {
  state = {
    isMenuOpen: false
  }

  MenuHandler = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    const { isMenuOpen } = this.state
    if(isMenuOpen) {
      return (
       <div> 
        <div className="appheader">
          <div onClick={this.MenuHandler}>
            <AddIcon className="appheader-icon appheader-icon__active" size={26}/>
         </div>
         <Link to='/'>
           <span className="appheader-logo"><span className="thin">Alture</span><strong>360</strong></span>
         </Link>
          <NotificationsIcon className="appheader-icon" size={26} />
        </div>
        <SideMenu />
      </div>
      );
    }
    return (
      <div className="appheader">
        <div onClick={this.MenuHandler}>
         <AddIcon className="appheader-icon" size={26}/>
         </div>
         <Link to='/'>
           <span className="appheader-logo"><span className="thin">Alture</span><strong>360</strong></span>
         </Link>
         <NotificationsIcon className="appheader-icon" size={26} />
      </div>
    );
  }
}

export default AppHeader;
