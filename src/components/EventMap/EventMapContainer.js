import React, { Component } from "react";
import NewMap from "./EventMap";

class MapContainer extends Component {
  render() {
    return (
      <NewMap
        coords={this.props.coords}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC0zvScZpvk_-_cTjYEK1FnbDH38_a_pSE&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `25vh`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default MapContainer;
