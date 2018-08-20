import React from 'react';
import { PlaceIcon } from 'mdi-react';

const MapMarker = ({ text }) => {
    
    const markerStyles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '3%',
            paddingRight: '3%'
        },
        icon: {
            color: '#eb5757',

        }
    }

    return (
        <div style={markerStyles.container}>
            <PlaceIcon style={markerStyles.icon} size={50} />
        </div>
    )
}

export default MapMarker