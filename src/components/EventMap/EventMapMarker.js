import React from "react";
import { Marker } from "react-google-maps";

export default class NewMarker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Marker position={this.props.location} />
      </React.Fragment>
    );
  }
}
