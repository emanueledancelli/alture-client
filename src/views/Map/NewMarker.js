import React from "react";
import { Marker } from "react-google-maps";
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { Link } from 'react-router-dom';

export default class NewMarker extends React.Component {
    state = {
        isInfoBoxVisible: false,
    }

    handleInfoBox = () => {
        this.setState({
            isInfoBoxVisible: !this.state.isInfoBoxVisible
        })
    }

    render(){
        const { isInfoBoxVisible } = this.state
        const eventInfo = <InfoBox><p>{this.props.name}</p></InfoBox>
        
        return(
            <React.Fragment>
                <Marker
                    onClick={this.handleInfoBox}
                    position={this.props.location}
                >
                    {isInfoBoxVisible
                        ? eventInfo
                        : null
                    }
                </Marker>
            </React.Fragment>
        );
    }
}