import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import NewMarker from "./EventMapMarker";

const EventMap = withScriptjs(
  withGoogleMap(props => {
    const marker = props.events(
      <NewMarker
        location={{ lat: props.events.latitude, lng: props.events.Longitude }}
      />
    );

    return (
      <GoogleMap defaultZoom={11} center={{ lat: 45.79377, lng: 10.27363 }}>
        {marker}
      </GoogleMap>
    );
  })
);

export default EventMap;
