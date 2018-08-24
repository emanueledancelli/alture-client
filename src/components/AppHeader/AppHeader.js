import React, { Component } from 'react';
import './AppHeader.css';
import { AddIcon, NotificationsIcon } from 'mdi-react';
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

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

    return (
      <React.Fragment>
        <div className="AppHeader">
          <div onClick={this.MenuHandler}>
            <AddIcon className="AppHeader-icon" size={26}/>
          </div>
          <Logo />
          <NotificationsIcon className="AppHeader-icon" size={26} />
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
