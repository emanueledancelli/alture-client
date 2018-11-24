import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import NewMarker from "./Marker";

const NewMap = withScriptjs(
  
  withGoogleMap(props => {
    const markers = props.events.map(e => {

      let parsedLat = parseInt(e.acf.latitudine)
      let parsedLong = parseInt(e.acf.longitudine)

      return  <NewMarker
                key={e.id}
                location={{ lat: parsedLat, lng: parsedLong }}
                name={e.title}
                id={e.id}
                date={e.acf.data_inizio}
              />
    });

    return (
      <GoogleMap defaultZoom={11} center={{ lat: 45.79377, lng: 10.27363 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default NewMap;
