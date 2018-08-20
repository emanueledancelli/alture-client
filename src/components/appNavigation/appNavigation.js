import React, { Component } from 'react';
import './appNavigation.css';

import { Link } from 'react-router-dom'

import { HomeIcon, MapIcon } from 'mdi-react';


class AppNavigation extends Component {
  render() {
    return (
      <div className="AppNavigation">
        <Link to='/'>
          <div>
            <HomeIcon className="AppNavigation-icon" size={26}/>
          </div>
        </Link>
        <Link to='/Mappa'>
          <div>
            <MapIcon className="AppNavigation-icon" size={26}/>         
          </div>
        </Link>
      </div>
    );
  }
}

export default AppNavigation;
