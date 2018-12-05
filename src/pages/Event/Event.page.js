import React, { Component } from "react";
import styled, { css, keyframes } from "react-emotion";
import moment from "moment";
import "moment/locale/it";
import {
  LabelIcon,
  LocationIcon,
  AccessTimeIcon,
  OpenInNewIcon
} from "mdi-react";
import $ from "../../config.js";

import SingleHeader from "./components/EventHeader";
import Spinner from "../../components/common/Spinner";
import Header from "./components/Header";
import Contact from "./components/Contact";

export default class SingleEvent extends Component {
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
    },
    slicedTitle: ""
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.scrollToTop();
    this.getEvents();
  }

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
              tags: ""
              },

            isLoading: false });
      })
      .then(() => {
        this.sliceTitle()
      })
      .catch(err => console.log(err));
  };

  scrollToTop = () => window.scrollTo(0, 0);

  handleMapToggle = () => {
    this.setState({
      isMapOpen: !this.state.isMapOpen
    });
  };

  sliceTitle = () => {
    if (this.state.selectedEvent.title.length < 25) {
      this.setState({
        slicedName: this.state.selectedEvent.title
      })
    }
    let slicedTitle = this.state.selectedEvent.title.slice(0, 21) + "...";
    this.setState({
      slicedName: slicedTitle
    })
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
      & a {
        color: #333;
        text-decoration: underline;
        font-weight: bold;
      }
    `;

    const padfx = css`
      color: #333;
      font-size: 1.3em;
    `
    
    const InfoText = styled("p")`
      margin: 0px;
      padding-top: 0.7em;
      font-size: 1em;
      font-weight: 400;
      display: flex;
      text-transform: capitalize;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      & a {
        text-decoration: none;
        color: #333;
      }
    `;

    const InfoContainer = styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `;

    const MapToggler = styled("span")`
      color: #333;
      text-decoration: underline;
      font-family: Lato;
      font-weight: 600;
    `;

    const iconStyle = css`
      padding-right: 8px;
      color: #6D9B8D;
    `;

    const superStyle = css`
      color: #333;
      padding-left: 5px;
    `

    const {
      selectedEvent,
      isLoading,
      isMapOpen,
      slicedName
    } = this.state;
    const currentUrl = "https://alture.org" + this.props.location.pathname;
    const formattedTitle = selectedEvent.luogo.replace(/[^A-Z0-9]/ig, "+");
    const dataInizio = moment(selectedEvent.data_inizio).locale("it").format("MMMM D, YYYY")

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <>
        <SingleHeader
          url={currentUrl}
          name={slicedName}
          onClick={() => this.props.history.push("/")}
        />
        <Header
          image={selectedEvent.immagine}
          title={selectedEvent.title}
        />
        <MainInfo>
          <InfoContainer>
            <InfoText>
              <LabelIcon className={iconStyle} size={20} /> {selectedEvent.organizzatori}
            </InfoText>
            <InfoText>
              <AccessTimeIcon className={iconStyle} size={20} /> {dataInizio} &ensp;&ensp; ore: {selectedEvent.ora_inizio} - {selectedEvent.ora_fine}
            </InfoText>
            <InfoText>
              <LocationIcon className={iconStyle} size={20} /> 
              <a href={"https://www.google.com/maps/search/" + formattedTitle} target="_blank" rel="noopener noreferrer">{selectedEvent.luogo}</a>
              <OpenInNewIcon className={superStyle} size={14} />
            </InfoText>
          </InfoContainer>
        </MainInfo>
        <div className={Description}>
          <h3 className={padfx}>Informazioni</h3>
          <div dangerouslySetInnerHTML={this.createDescription()} className={descriptionText}></div>
        </div>
        <Contact mail={selectedEvent.email_organizzatore} />
      </>
    );
  }
}

