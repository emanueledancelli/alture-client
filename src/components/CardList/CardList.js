import React, { Component } from 'react';
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/it';


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
      
      const styles = {
        list: {
          width: '100%',
          marginBottom: '80px'
        }
      }
    
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
        )})
      
      if(isLoading) (
        <p>Caricamento...</p>
      )
      return (
        <div style={styles.list}>
          {cardList}
        </div>
      ); 
    }
    
}

export default CardList;
