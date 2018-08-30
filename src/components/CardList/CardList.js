import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styled from 'react-emotion';
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/it';

import Card from '../Card/Card'
import Spinner from '../Spinner/Spinner'
import { Filter1Icon } from 'mdi-react';

class CardList extends Component {
  
  state = {
    isLoading: false,
    events: []
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    
    axios.get("https://api.dancel.li/event")
      .then(res => {
        let sortedRes = _.sortBy(res.data, 'start')
        this.setState({ events: sortedRes, isLoading: false })
      })
      .catch(err => console.log(err))
      
  }


  render() {

      const Container = styled('div')`
        width: 100%;
        display: flex;
        flex-direction:column;
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
