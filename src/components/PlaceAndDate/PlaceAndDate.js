import React from 'react';
import { CalendarTodayIcon, LocationOnIcon } from 'mdi-react';

const PlaceAndDate = props => {

    const styles = {
        p: {
            margin: '0px',
            paddingTop: '0.5em',
            fontSize: '1em',
            fontWeight: '400', 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        icon: {
            paddingRight: '8px',
            color: '#F7B801'
        }
    }     
 
    return (
        <React.Fragment>
            <p style={styles.p} className={props.className}><CalendarTodayIcon style={styles.icon} size={16} />{props.date}</p>
            <p style={styles.p} className={props.className}><LocationOnIcon style={styles.icon} size={16} />{props.location}</p>
        </React.Fragment>
    )
};

export default PlaceAndDate;
