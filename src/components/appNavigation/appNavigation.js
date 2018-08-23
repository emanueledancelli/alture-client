import React, { Component } from 'react';
import './appNavigation.css';

import { NavLink } from 'react-router-dom'

import { HomeIcon, MapIcon } from 'mdi-react';


class AppNavigation extends Component {
  render() {
    return (
      <div className="AppNavigation">
        <div>
          <NavLink 
            to='/'
            exact
            activeClassName="selected"
          >
            <HomeIcon className="AppNavigation-icon" size={26}/>
          </NavLink>
        </div>
        <div>
          <NavLink 
            to='/Mappa'
            exact
            activeClassName="selected"
          >
            <MapIcon className="AppNavigation-icon" size={26}/>         
          </NavLink>
        </div>
      </div>
    );
  }
}

export default AppNavigation;
