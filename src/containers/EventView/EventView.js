import React, { Component } from "react";
import styled, { css, keyframes } from "react-emotion";
import {
  LabelIcon,
  LocationIcon,
  AccessTimeIcon
} from "mdi-react";
import $ from "../../config.js";

import SingleHeader from "../../components/SingleHeader/SingleHeader.js";
import Spinner from "../../components/Spinner/Spinner.js";
import EventHeader from "./EventHeader.js";
import EventMapComponent from "../../components/EventMap/EventMapComponent";
import CallToAction from "./calltoaction.js";

class SingleEvent extends Component {
  state = {
    isLoading: false,
    isMapOpen: false,
    selectedEvent: {
      title: "",
      descrizione: "",
      immagine: "",
      data_inizio: "",
      ora_inizio: "",
      data_fine: "",
      ora_fine: "",
      luogo: "",
      latitudine: "",
      longitudine: "",
      organizzatori: "",
      email_organizzatore: "",
      tags: ""     
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.scrollToTop();
    this.getEvents();
  }

  scrollToTop = () => window.scrollTo(0, 0);

  getEvents = () => {
    $.get(`/eventi/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ 
            selectedEvent: {
              title: res.data.title.rendered,
              descrizione: res.data.acf.descrizione,
              immagine: res.data.acf.immagine.url,
              data_inizio:res.data.acf.data_inizio,
              ora_inizio: res.data.acf.ora_inizio,
              data_fine: res.data.acf.data_fine,
              ora_fine: res.data.acf.ora_fine,
              luogo:res.data.acf.luogo,
              latitudine: parseFloat(res.data.acf.latitudine),
              longitudine: parseFloat(res.data.acf.longitudine),
              organizzatori:res.data.acf.organizzatori,
              email_organizzatore:res.data.acf.email_organizzatore,
              tags: ''
              }, 
            isLoading: false });
      })
      .catch(err => console.log(err));
  };

  handleMapToggle = () => {
    this.setState({
      isMapOpen: !this.state.isMapOpen
    });
  };

  sliceName = () => {
    if (this.state.selectedEvent.title.length < 25) {
      return this.state.selectedEvent.title;
    }
    return this.state.selectedEvent.title.slice(0, 21) + "...";
  };

  sliceDescription = () => {
    return this.state.selectedEvent.descrizione.slice(0, 200) + "...";
  };

  createDescription = () => {
    return {__html:this.state.selectedEvent.descrizione}
  }

  render() {
    const fadeIn = keyframes`
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        `;

    const MainInfo = styled("div")`
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 8%;
      padding-bottom: 5%;
      color: #333;
    `;
    const Description = css`
      padding-top: 5%;
      padding-right: 5%;
      padding-left: 5%;
    `;
    const descriptionText = css`
      font-size: 1em;
      line-height: 180%;
      color: #333;
      animation: ${fadeIn} 0.5s ease-out;
      margin-bottom: 0;
      margin-top: 20px;
    `;
    const helperText = css`
      font-weight: 400;
      color: #bdbdbd;
      font-size: 1em;
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;
    const informazioni = css`
      font-weight: 700;
      font-size: 1.3em;
      color: #728dc3;
      padding-bottom: 30px;
    `;
    const showMore = css`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding-right: 3%;
      padding-bottom: 3%;
    `;

    const InfoText = styled("p")`
      margin: 0px;
      padding-top: 0.5em;
      font-size: 1em;
      font-weight: 500;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    `;

    const InfoContainer = styled("div")`
      display: flex;
      flex-direction: column;
      height: 15vh;
      justify-content: space-around;
    `;

    const MapToggler = styled("span")`
      color: #728dc3;
      text-decoration: underline;
      font-family: Lato;
      font-weight: 500;
    `;

    const iconStyle = css`
      padding-right: 8px;
      color: #728dc3;
    `;

    const {
      selectedEvent,
      isLoading,
      isMapOpen
    } = this.state;
    const startDate = selectedEvent.data_inizio;
    const endDate = selectedEvent.ora_fine;
    const currentUrl = "https://alture.org/eventi" + this.props.location.pathname;
    const slicedName = this.sliceName();

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <SingleHeader
          url={currentUrl}
          name={slicedName}
          image={selectedEvent.immagine}
          onClick={() => this.props.history.push('/')}
        />
        <EventHeader
          image={selectedEvent.immagine}
          title={selectedEvent.title}
        />
        <MainInfo>
          <InfoContainer>
            <InfoText>
              <LabelIcon className={iconStyle} size={20} />
              {selectedEvent.organizzatori}
            </InfoText>
            <InfoText>
              <AccessTimeIcon className={iconStyle} size={20} />
              {startDate} - {endDate}
            </InfoText>
            {isMapOpen ? (
              <InfoText onClick={this.handleMapToggle}>
                <LocationIcon className={iconStyle} size={20} />
                {selectedEvent.luogo}
                &ensp; - &ensp; <MapToggler>nascondi mappa</MapToggler>
              </InfoText>
            ) : (
              <InfoText onClick={this.handleMapToggle}>
                <LocationIcon className={iconStyle} size={20} />
                {selectedEvent.luogo}
                &ensp; - &ensp; <MapToggler>mostra mappa</MapToggler>
              </InfoText>
            )}
          </InfoContainer>
        </MainInfo>
        {isMapOpen && (
          <EventMapComponent
            coords={{
              lat: selectedEvent.latitudine,
              lng: selectedEvent.longitudine
            }}
          />
        )}
        <div className={Description}>
          <span className={informazioni}>Informazioni</span>
          <div dangerouslySetInnerHTML={this.createDescription()} className={descriptionText}></div>
        </div>
        <CallToAction mail={selectedEvent.email_organizzatore} />
      </React.Fragment>
    );
  }
}

export default SingleEvent;
