import React from 'react';
import PlaceAndDate from '../PlaceAndDate/PlaceAndDate'

const Card = props => {

  const styles = {
      card: {
        minHeight: '200px',
        borderRadius: '10px',
        paddingTop: '5px',
        paddingBottom:'5px',
        paddingLeft: '20px',
        marginBottom: '10px',
        marginLeft: '5px',
        marginRight: '5px',
        zIndex: '-99',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        WebkitBoxShadow: '3px 4px 20px -4px rgba(0,0,0,0.8)',
        MozBoxShadow: '3px 4px 20px -4px rgba(0,0,0,0.8)',
        boxShadow: '3px 4px 20px -4px rgba(0,0,0,0.8)',
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.backgroundImage}) center`
      },
      header: {
        maxWidth: '80%'
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
