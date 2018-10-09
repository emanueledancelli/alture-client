import React, { Component } from "react";
import MapContainer from "./EventMapContainer";

class EventMapComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <MapContainer coords={this.props.coords} />
      </React.Fragment>
    );
  }
}

export default EventMapComponent;
