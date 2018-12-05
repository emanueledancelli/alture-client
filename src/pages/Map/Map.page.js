import React, { Component } from "react"
import MapContainer from "./components/Container";
import { Seo } from "components/common";
import Logo from "logo.png";

export class Map extends Component {
    render() {
        return (
            <>
                <Seo 
                    title="Mappa - Alture"
                    description="Mappa degli eventi di Alture" 
                    url="https://alture.org/Mappa" 
                    image={Logo}
                />
            
                <MapContainer />    
            </>
        );
    }
}
