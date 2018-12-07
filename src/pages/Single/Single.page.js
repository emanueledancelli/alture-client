import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchEvents } from "actions/eventsActions";
import _ from 'lodash';
import moment from "moment";
import "moment/locale/it";
import { Hero, Contact, TopBar, Description } from "./components";
import { Spinner, Seo, ScrollToTop } from "components/common";

class Single extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  sliceTitle = title => {
    if (title.length < 25) {
      return title
    }
    return title.slice(0, 21) + "...";
  };

  createDescription = descr => {
    return {__html:descr}
  }

  getEvents = arr => {
    return arr.filter(e => e.id == this.props.match.params.id)
  } 

  render() {
    const { events } = this.props;
    const getEventToShow = this.getEvents(events.data)
    const e = { ...getEventToShow[0]} //event to show as object
    console.log(e)

    //get single event
/* 
    const formattedDate = moment(e.acf.data_inizio).locale("it").format("MMMM D, YYYY");
    const formattedPlace = e.acf.luogo.replace(/[^A-Z0-9]+/ig, "+");
    const currentUrl = "https://alture.org" + this.props.location.pathname;
    const gmapsUrl = "https://www.google.com/maps/search/" + formattedPlace;
    const seoDescription = e.title.rendered + " si terrà presso " + e.acf.luogo + " il " + formattedDate + ". ";
    const eventTimes = formattedDate + "  ore: " + e.acf.ora_inizio + " " + e.acf.ora_fine;
 */
    return (
      <>

        <ScrollToTop />

        {/* <Seo 
          title={event.title + " - Alture"}
          description={seoDescription}
          url={currentUrl} 
          image={event.immagine}
        />

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
        /> */}
      
      </>
    );
  }
}

Single.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = {
  fetchEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);


