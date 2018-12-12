import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { formatDate } from "utils";
import NewMarker from "./Marker";

const NewMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.events.map(e => {
      let parsedLat = parseFloat(e.acf.latitudine);
      let parsedLong = parseFloat(e.acf.longitudine);

      return (
        <NewMarker
          location={{ lat: parsedLat, lng: parsedLong }}
          name={e.title.rendered}
          id={e.id}
          date={formatDate(e.acf.data_inizio)}
          key={e.id}
        />
      );
    });

    return (
      <GoogleMap defaultZoom={10} center={{ lat: 45.79377, lng: 10.27363 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default NewMap;
