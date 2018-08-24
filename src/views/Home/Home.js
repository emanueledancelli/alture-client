import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList'
import AppHeader from '../../components/AppHeader/AppHeader'

class Home extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <CardList />
      </div>
    );
  }
}

export default Home;
