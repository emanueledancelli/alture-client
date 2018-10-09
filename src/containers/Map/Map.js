import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import NewMarker from "./Marker";

const NewMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.events.map(e => (
      <NewMarker
        location={{ lat: e.latitudine, lng: e.longitudine }}
        name={e.titolo}
        id={e.id}
        date={e.inizio}
      />
    ));

    return (
      <GoogleMap defaultZoom={11} center={{ lat: 45.79377, lng: 10.27363 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default NewMap;
