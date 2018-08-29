import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'react-emotion';
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/it';

import Card from '../Card/Card'
import Spinner from '../Spinner/Spinner'

class CardList extends Component {
  
  state = {
    isLoading: false,
    events: []
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    
    axios.get("https://api.dancel.li/event")
      .then(res => { 
        this.setState({ events: res.data, isLoading: false })
      })
      .catch(err => console.log(err))
  }

  render() {

      const Container = styled('div')`
        width: 100%;
        //margin-top: 15vh;
        margin-bottom: 11vh;
      `
    
      const { events, isLoading } = this.state

      const cardList = events.map(e =>  {
        const date = moment(e.start).locale('it').format("LLL");
        return (
          <Link 
            to={`/eventi/${e.id}`}
            key={e.id}>
            <Card
              title={e.name}
              date={date}
              backgroundImage={`https://api.dancel.li${e.image.url}`}
              location={e.place}
            />
          </Link>
        )});
      
      if(isLoading) {
        return (
          <Spinner />
        )
      }      
      return (
        <Container>
          { cardList }
        </Container>
      ); 
    }
    
}

export default CardList;
