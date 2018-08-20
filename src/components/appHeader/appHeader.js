import React, { Component } from 'react';
import './appHeader.css';

import { AddIcon, NotificationsIcon } from 'mdi-react';

import SideMenu from '../SideMenu/SideMenu'
import Notifications from '../Notifications/Notifications'

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
            <AddIcon className="appheader-icon appheader-icon__active" size={35}/>
         </div>
         <p className="appheader-logo"><span className="thin">Alture</span><strong>360</strong></p>
         <NotificationsIcon className="appheader-icon" size={35} />
        </div>
        <SideMenu />
      </div>
      );
    }
    return (
      <div className="appheader">
        <div onClick={this.MenuHandler}>
         <AddIcon className="appheader-icon" size={35}/>
         </div>
         <p className="appheader-logo"><span className="thin">Alture</span><strong>360</strong></p>
         <NotificationsIcon className="appheader-icon" size={35} />
      </div>
    );
  }
}

export default AppHeader;
