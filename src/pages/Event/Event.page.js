import React, { Component } from "react";
import moment from "moment";
import "moment/locale/it";
import $ from "../../config.js";

import { Hero, Contact, TopBar, Description } from "./components";
import { Spinner } from "components/common";

export class Event extends Component {
  state = {
    isLoading: false,
    event: {
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
            event: {
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
    if (this.state.event.title.length < 25) {
      this.setState({
        slicedName: this.state.event.title
      })
    }
    let slicedTitle = this.state.event.title.slice(0, 21) + "...";
    this.setState({
      slicedName: slicedTitle
    })
  };

  createDescription = () => {
    return {__html:this.state.event.descrizione}
  }

  render() {

    const {
      event,
      isLoading,
      slicedName
    } = this.state;
    const currentUrl = "https://alture.org" + this.props.location.pathname;
    const formattedTitle = event.luogo.replace(/[^A-Z0-9]/ig, "+");
    const gmapsUrl = "https://www.google.com/maps/search/" + formattedTitle;
    const formattedDate = moment(event.data_inizio).locale("it").format("MMMM D, YYYY");
    const eventTimes = formattedDate + "  ore: " + event.ora_inizio + " " + event.ora_fine;

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <>

        <TopBar
          url={currentUrl}
          name={slicedName}
          onClick={() => this.props.history.push("/")}
        />

        <Hero
          image={event.immagine}
          title={event.title}
        />

        <Description
          organizers={event.organizzatori}
          dates={eventTimes}
          mapUrl={gmapsUrl}
          place={event.luogo}
          info={this.createDescription()}
        />

        <Contact 
          mail={event.email_organizzatore} 
        />
      
      </>
    );
  }
}

