import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../components/MapMarker/MapMarker';
import AppHeader from '../../components/AppHeader/AppHeader';

class Map extends Component {
    
    render() {
      const defaultProps = {
        center: {
          lat: 45.793770,
          lng: 10.273630
        },
        zoom: 11
      };

      const mapStyles = {
          mapMargins: {
          },
          mapContainer: {
              height: '77vh',
              width: '100%',
              borderRadius: '10px',
          }
      }
    
    return (
        <div>
            <AppHeader />
            <div style={mapStyles.mapMargins}>
                <div style={mapStyles.mapContainer}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDdrWJJch3MI-CQuQgv3PEzaok97K4ywss'  }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <MapMarker
                            lat={45.793770}
                            lng={10.273630}
                            text={'Bovegno'}
                        />
                        <MapMarker
                            lat={45.7505617}
                            lng={10.1593999}
                            text={'Guglielmo'}
                        />
                        <MapMarker
                            lat={45.6584268}
                            lng={10.0384156}
                            text={'Iseo'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );

    }
    
}

export default Map