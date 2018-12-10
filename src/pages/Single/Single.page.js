import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spring } from 'react-spring';
import { Hero, Contact, TopBar, Description } from "./components";
import { Spinner, Seo, ScrollToTop } from "components/common";
import moment from "moment";
import "moment/locale/it";


class Single extends Component {

  createSlicedTitle = title => (title.lenght < 25) ? title : title.slice(0,21) + "...";
  
  createHtmlDescription = descr => { return {__html:descr}}
  
  createSeoTitle = title => title + " - Alture";

  createGmapsUrl = place => `https://www.google.com/maps/search/${place.replace(/[^A-Z0-9]+/ig, "+")}`;

  createEventTimes = (date, start, end) => `${moment(date).locale("it").format("MMMM D, YYYY")} ore: ${start} ${end}`;

  createSeoDescription = (name, place, date) => `${name} si terrà presso ${place} il ${moment(date).locale("it").format("MMMM D, YYYY")}.`

  render() {
    const { events } = this.props;
    
    if(events.isLoading) {
      return <Spinner />
    }
    return (
      <>

        <ScrollToTop />

        <Seo 
          title={this.createSeoTitle(events.single.title.rendered)}
          description={this.createSeoDescription(events.single.title.rendered, events.single.acf.luogo, events.single.acf.data_inizio)}
          url={`https://alture.org${this.props.location.pathname}`}
          image={events.single.acf.immagine.url}
        />


        <Spring 
          from={{ opacity: 0, transform: 'translateX(100px)' }}
          to={{ opacity: 1, transform: 'translateX(0)' }}
        >
        {props => 

          <div style={props}> 


            <TopBar
              url={`https://alture.org${this.props.location.pathname}`}
              name={this.createSlicedTitle(events.single.title.rendered)}
              onClick={() => this.props.history.push("/")}
            />

            <Hero
              image={events.single.acf.immagine.url}
              title={events.single.title.rendered}
            />
    
            <Description
              organizers={events.single.acf.organizzatori}
              dates={this.createEventTimes(events.single.acf.data_inizio, events.single.acf.ora_inizio, events.single.acf.ora_fine)}
              mapUrl={this.createGmapsUrl(events.single.acf.luogo)}
              place={events.single.acf.luogo}
              info={this.createHtmlDescription(events.single.acf.descrizione)}
            /> 

            <Contact 
              mail={events.single.acf.email_organizzatore} 
            />
          </div>}

        </Spring>

      </>
    );
  }
}

Single.propTypes = {
  events: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    events: {
      single: state.events.data.filter(e => e.id === parseInt(ownProps.match.params.id))[0],
      isLoading: state.events.isLoading
    }
  }
}

export default connect(mapStateToProps)(Single);


