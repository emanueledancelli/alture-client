import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../components/MapMarker/MapMarker';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppNavigation from '../../components/AppNavigation/AppNavigation'
import { Link } from 'react-router-dom'

class Map extends Component {
    state = {
        isLoading: false,
        events: []
    }

    componentWillMount() {
        this.setState({ isLoading: true })


        axios.get("https://api.dancel.li/event")
            .then(res => { 
                this.setState({ events: res.data, isLoading: false })
                console.log(this.state.events)
            })
            .catch(err => console.log(err))
    }
    
    render() {
        const { events, isLoading } = this.state
        
        const eventList = events.map(e => {
            const date = moment(e.start).locale('it').format('LLL');
            return (
                <Link
                    to={`/eventi/${e.id}`}
                    key={e.id}
                    lat={e.latitude}
                    lng={e.Longitude}>
                    <MapMarker
                        name={e.place}
                        date={date}
                    />
                </Link>
            )
        });

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
                            {eventList}                
                        </GoogleMapReact>
                    </div>
                </div>
                <AppNavigation />
            </div>
        );

        }
    
}

export default Map