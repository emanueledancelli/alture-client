import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import NewMarker from './NewMarker';
import { Link } from 'react-router-dom';


const NewMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.events.map( e => 
                <NewMarker
                    location={{lat: e.latitude, lng: e.Longitude}}
                    name={e.name}
                />
                );
                  
  return (
        <GoogleMap
            defaultZoom={11}
            center={ { lat:  45.793770, lng: 10.273630 } }
            >
            {markers}
        </GoogleMap>
    );
  }
))

export default NewMap;