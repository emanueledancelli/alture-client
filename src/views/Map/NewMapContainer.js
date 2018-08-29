import React, { Component } from "react";
import NewMap from './NewMap';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';

class MapContainer extends Component {
    state = {
        isLoading: false,
        events: []
    }

    componentDidMount() {
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

        if(isLoading) {
            return (
                <Spinner />
            )
        }
		return (
			<NewMap
				events={events}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC0zvScZpvk_-_cTjYEK1FnbDH38_a_pSE&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `76vh`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default MapContainer;