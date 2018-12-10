import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux";
import MapContainer from "./components/Container";
import { Seo, Spinner } from "components/common";
import Logo from "logo.png";


class Map extends Component {

    render() {

        const { events } = this.props
    
        return (
            <>

                <Seo 
                    title="Mappa - Alture"
                    description="Mappa degli eventi di Alture" 
                    url="https://alture.org/Mappa" 
                    image={Logo}
                />

                {events.isLoading 
                    ? <Spinner />
                    : <MapContainer events={events.data} />}
            
            </>
        );
    }
}

Map.propTypes = {
    events: PropTypes.object.isRequired
  }
  
const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(Map)
