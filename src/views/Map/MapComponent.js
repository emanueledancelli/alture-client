import React, { Component } from 'react'

import AppHeader from '../../components/AppHeader/AppHeader';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import MapContainer from './MapContainer';

class MapComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <AppHeader />
                <MapContainer />    
                <AppNavigation />
            </React.Fragment>
        );
    }
}

export default MapComponent;