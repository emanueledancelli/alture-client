import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppNavigation from '../../components/AppNavigation/AppNavigation'

class Home extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
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
