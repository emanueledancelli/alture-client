import React, { Component } from 'react';
import './appNavigation.css';

import { Link } from 'react-router-dom'

import { HomeIcon, MapIcon } from 'mdi-react';


class AppNavigation extends Component {
  render() {
    return (
      <div className="AppNavigation">
        <div>
          <Link to='/'>
            <HomeIcon className="AppNavigation-icon" size={26}/>
          </Link>
        </div>
        <div>
          <Link to='/Mappa'>
            <MapIcon className="AppNavigation-icon" size={26}/>         
          </Link>
        </div>
      </div>
    );
  }
}

export default AppNavigation;
