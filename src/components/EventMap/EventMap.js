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
        <div style={{ height: '200px', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC0zvScZpvk_-_cTjYEK1FnbDH38_a_pSE'  }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            > 
            <MapMarker
                lat={45.793770}
                lng={10.273630}
                name={'boma'}
            />
            </GoogleMapReact>
        </div>
    );
}

export default EventMap