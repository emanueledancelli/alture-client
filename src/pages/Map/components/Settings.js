import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import moment from "moment";
import "moment/locale/it";
import NewMarker from "./Marker";

const NewMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.events.map(e => {
      let parsedLat = parseFloat(e.acf.latitudine);
      let parsedLong = parseFloat(e.acf.longitudine);
      let formattedDate = moment(e.acf.data_inizio)
        .locale("it")
        .format("MMMM D, YYYY");

      return (
        <NewMarker
          location={{ lat: parsedLat, lng: parsedLong }}
          name={e.title.rendered}
          id={e.id}
          date={formattedDate}
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
