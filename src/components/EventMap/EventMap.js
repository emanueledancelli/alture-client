import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../MapMarker/MapMarker';

const EventMap = props => {
    const defaultProps = {
        center: {
          lat: 45.793770,
          lng: 10.273630
        },
        zoom: 11
      };
    
    return (
        <div style={{ height: '150px', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDdrWJJch3MI-CQuQgv3PEzaok97K4ywss'  }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
            <MapMarker
                lat={45.793770}
                lng={10.273630}
            />
            </GoogleMapReact>
        </div>
    );
}

export default EventMap