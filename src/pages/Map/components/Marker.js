import React from "react";
import "./Marker.scss";
import { Link } from "react-router-dom";
import { Marker } from "react-google-maps";
import { formatTitle } from "utils";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

export default class NewMarker extends React.Component {
  state = {
    isInfoBoxVisible: false
  };

  handleInfoBox = () => {
    this.setState({
      isInfoBoxVisible: !this.state.isInfoBoxVisible
    });
  };

  render() {
    const { isInfoBoxVisible } = this.state;
    const date = this.props.date;

    const eventInfo = (
      <InfoBox>
        <Link
          to={`/eventi/${this.props.id}/${formatTitle(
            this.props.name,
            "dash"
          )}`}
        >
          <div className="marker__container">
            <h1 className="title black">{this.props.name}</h1>
            <p className="marker__date">{date}</p>
            <p className="marker__more">premi per avere più informazioni</p>
          </div>
        </Link>
      </InfoBox>
    );

    return (
      <>
        <Marker onClick={this.handleInfoBox} position={this.props.location}>
          {isInfoBoxVisible ? eventInfo : null}
        </Marker>
      </>
    );
  }
}
