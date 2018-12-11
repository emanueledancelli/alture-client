import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux";
import MapContainer from "./components/Container";
import { Seo, Spinner } from "components/common";
import posed from "react-pose";
import Logo from "logo.png";

const Animated = posed.div({
    enter: { 
      y: 0,
      opacity: 1, 
      transition: {
        y: { ease: 'easeOut', duration: 400 },
      } 
    },
    exit: { 
      y: '100%',
      opacity: 0, 
      transition: {
        y: { ease: 'easeOut', duration: 400 },
      }  
    },
  });



class Map extends Component {

    render() {

        const { events } = this.props
    
        return (
            <Animated>

                <Seo 
                    title="Mappa - Alture"
                    description="Mappa degli eventi di Alture" 
                    url="https://alture.org/Mappa" 
                    image={Logo}
                />

                {events.isLoading 
                    ? <Spinner />
                    : <MapContainer events={events.data} />}
            
            </Animated>
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
