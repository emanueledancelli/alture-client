import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
import styled from 'react-emotion';
import moment from 'moment';
import 'moment/locale/it';

import Card from '../Card/Card.js'
import withEvents from '../../hoc/withEvents';

class CardList extends Component {
  
  render() {

      const AnimationContainer = posed.div({
        enter: { staggerChildren: 50 },
        exit: { staggerChildren: 20, staggerDirection: -1 }
      })

      const AnimatedItem = posed.div({
        enter: { x: 0, opacity: 1 },
        exit: { x: 50, opacity: 0 }
      });

      const Container = styled(AnimationContainer)`
        width: 100%;
        display: flex;
        flex-direction:column;
        margin-bottom: 11vh;
      `

      const cardList = this.props.events.map(e =>  {
        const date = moment(e.start).locale('it').format("LLL");
        const image = `https://api.dancel.li/${e.image.url}`
        return (
          <AnimatedItem>
            <Link 
              to={`/eventi/${e.id}`}
              key={e.id}>
              <Card
                title={e.name}
                date={date}
                backgroundImage={image}
                location={e.place}
              />
            </Link>
          </AnimatedItem>
        )});
         
      return (
        <Container>
          { cardList }
        </Container>
      ); 
    }
    
}

export default withEvents(CardList);
