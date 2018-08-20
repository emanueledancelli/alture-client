import React from 'react';
import { CalendarTodayIcon, LocationOnIcon } from 'mdi-react';

const PlaceAndDate = props => {

    const styles = {
        p: {
            margin: '0px',
            paddingTop: '2px',
            fontSize: '20px',
            fontWeight: '400', 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'baseline'
        },
        icon: {
            paddingRight: '8px',
            paddingTop: '2px',
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
