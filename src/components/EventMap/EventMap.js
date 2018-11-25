import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import NewMarker from "./EventMapMarker";

const EventMap = withScriptjs(
  withGoogleMap(props => {

    // let mapUrl = "https://www.google.com/maps/dir/?api=1&" + props.coords.lat + "," + props.coords.lng
    
    const marker = (
        <NewMarker location={{ lat: props.coords.lat, lng: props.coords.lng }} />    
    );

    return (
      <GoogleMap
        defaultZoom={11}
        center={{ lat: props.coords.lat, lng: props.coords.lng }}
      >
        {marker} 
      </GoogleMap>
    );
  })
);

export default EventMap;
