import React from 'react';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate'

const Card = props => {

  const styles = {
      card: {
        minHeight: '250px',
        borderRadius: '10px',
        paddingTop: '5px',
        paddingBottom:'5px',
        paddingLeft: '33px',
        marginBottom: '14px',
        marginLeft: '10px',
        marginRight: '10px',
        zIndex: '-99',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        WebkitBoxShadow: '3px 4px 15px -4px rgba(0,0,0,0.75)',
        MozBoxShadow: '3px 4px 15px -4px rgba(0,0,0,0.75)',
        boxShadow: '3px 4px 15px -4px rgba(0,0,0,0.75)',
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.backgroundImage}) center`
      },
      header: {
        maxWidth: '60%'
      }
  }

  return (
      <div style={styles.card}>        
        <h1 style={styles.header} className="title white">{props.title}</h1>
        <div><PlaceAndDate className="white" location={props.location} date={props.date} /></div>
      </div>
  );
}

export default Card;
