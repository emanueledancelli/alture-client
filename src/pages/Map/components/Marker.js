import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "react-router-dom";
import { Marker } from "react-google-maps";
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

    const Container = styled("div")`
      background-color: white;
      padding-top: 5%;
      padding-right: 5%;
      padding-left: 5%;
      padding-bottom: 1%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      & img {
        border-radius: 10px;
      }
    `;
    const seemore = css`
      color: #828282;
      font-style: italic;
      font-size: 1.2em;
    `;
    const dateStyle = css`
      font-size: 1.5em;
      text-transform: capitalize;
      color: #6D9B8D;
    `;
    const date = this.props.date

    const eventInfo = (
      <InfoBox>
        <Link to={`/eventi/${this.props.id}`}>
          <Container>
            <h1 className="title black">{this.props.name}</h1>
            <p className={dateStyle}>{date}</p>
            <p className={seemore}>premi per avere più informazioni</p>
          </Container>
        </Link>
      </InfoBox>
    );

    return (
      <React.Fragment>
        <Marker onClick={this.handleInfoBox} position={this.props.location}>
          {isInfoBoxVisible ? eventInfo : null}
        </Marker>
      </React.Fragment>
    );
  }
}
