import React, { Component } from "react";
import NewMap from './Settings';
import withEvents from '../../../hoc/withEvents';

class MapContainer extends Component {

	render() {
        const { events } = this.props

		return (
			<NewMap
				events={events}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC0zvScZpvk_-_cTjYEK1FnbDH38_a_pSE&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `78vh`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default withEvents(MapContainer);