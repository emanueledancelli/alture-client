import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchEvents } from "actions/eventsActions";
import { filterSingleEvent } from "actions/singleActions";
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
    let filtered = events.data.filter(e => e.id == this.props.match.params.id)
    let single = {...filtered[0]}
    console.log(single)

    //get single event

    const formattedDate = moment(single.acf.data_inizio).locale("it").format("MMMM D, YYYY");
    const formattedPlace = single.acf.luogo.replace(/[^A-Z0-9]+/ig, "+");
    const currentUrl = "https://alture.org" + this.props.location.pathname;
    const gmapsUrl = "https://www.google.com/maps/search/" + formattedPlace;
    const seoDescription = single.title.rendered + " si terrà presso " + single.acf.luogo + " il " + formattedDate + ". ";
    const eventTimes = formattedDate + "  ore: " + single.acf.ora_inizio + " " + single.acf.ora_fine

    return (
      <>

        <ScrollToTop />

        <Seo 
          title={single.title.rendered + " - Alture"}
          description={seoDescription}
          url={currentUrl} 
          //image={e.immagine}
        /> 

        <TopBar
          url={currentUrl}
          //name={slicedName}
          onClick={() => this.props.history.push("/")}
        />

        <Hero
          image={single.acf.immagine.url}
          title={single.title.rendered}
        />

        <Description
          organizers={single.acf.organizzatori}
          dates={eventTimes}
          mapUrl={gmapsUrl}
          place={single.acf.luogo}
          //info={this.createDescription()}
        />

        <Contact 
          mail={single.acf.email_organizzatore} 
        /> 
      
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
  fetchEvents,
  filterSingleEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);


