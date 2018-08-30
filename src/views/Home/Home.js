import React, { Component } from 'react';
import styled from 'react-emotion';
import CardList from '../../components/CardList/CardList'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppNavigation from '../../components/AppNavigation/AppNavigation'

class Home extends Component {
  render() {
  
    return (
      <React.Fragment>
        <AppHeader />
        <CardList />
        <AppNavigation />
      </React.Fragment>
    );
  }
}

export default Home;
