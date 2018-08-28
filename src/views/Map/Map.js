import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../components/MapMarker/MapMarker';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppNavigation from '../../components/AppNavigation/AppNavigation'
import { Link } from 'react-router-dom'

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
              marginTop: '14vh',
          },
          mapContainer: {
              height: '76vh',
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
                        bootstrapURLKeys={{ key: 'AIzaSyC0zvScZpvk_-_cTjYEK1FnbDH38_a_pSE'  }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <Link 
                            to="/"
                            lat={45.793770}
                            lng={10.273630}>
                            <MapMarker
                                name={'Bovegno'}
                                date={'Ven 14 Ott'}
                            />
                        </Link>
                        <Link to="/">
                            <MapMarker
                                lat={45.7505617}
                                lng={10.1593999}
                                name={'Golem'}
                                date={'Gio 25 Sett'}
                            />
                        </Link>                       
                        <Link to="/">
                            <MapMarker
                                lat={45.6584268}
                                lng={10.0384156}
                                name={'Iseo'}
                                date={'Sab 11 Sett'}
                            />
                        </Link>                        
                    </GoogleMapReact>
                </div>
            </div>
            <AppNavigation />
        </div>
    );

    }
    
}

export default Map