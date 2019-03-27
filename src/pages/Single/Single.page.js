import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { formatDate, formatTitle } from "utils";
import { SingleHero, Contact, TopBar, Description } from "./components";
import { Spinner, Seo, ScrollToTop } from "components/common";
import posed from "react-pose";

const Animated = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      x: { ease: "linear", duration: 200 }
    }
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      x: { ease: "linear", duration: 200 }
    }
  }
});

class Single extends Component {
  createSlicedTitle = title =>
    title.lenght < 25 ? title : title.slice(0, 21) + "...";

  createHtmlDescription = descr => {
    return { __html: descr };
  };

  createSeoTitle = title => title + " - Alture";

  createGmapsUrl = place =>
    `https://www.google.com/maps/search/${formatTitle(place, "plus")}`;

  createEventTimes = (date, start, end) =>
    `${formatDate(date)} ore: ${start} ${end}`;

  createSeoDescription = (name, place, date) =>
    `${name} si terrà presso ${place} il ${formatDate(date)}.`;

  render() {
    const { events } = this.props;
    const seoTitle = this.createSeoTitle(events.single.title.rendered);
    const seoDescription = this.createSeoDescription(
      events.single.title.rendered,
      events.single.acf.luogo,
      events.single.acf.data_inizio
    );
    const eventUrl = `https://alture.org${this.props.location.pathname}`;
    const slicedTitle = this.createSlicedTitle(events.single.title.rendered);
    const eventTimes = this.createEventTimes(
      events.single.acf.data_inizio,
      events.single.acf.ora_inizio,
      events.single.acf.ora_fine
    );
    const gMapsUrl = this.createGmapsUrl(events.single.acf.luogo);
    const htmlDescription = this.createHtmlDescription(
      events.single.acf.descrizione
    );

    if (events.isLoading) {
      return <Spinner />;
    }
    return (
      <>
        <ScrollToTop />
        <Seo
          title={seoTitle}
          description={seoDescription}
          url={eventUrl}
          image={events.single.acf.immagine.url}
        />

        <Animated>
          <TopBar
            url={eventUrl}
            name={slicedTitle}
            onClick={() => this.props.history.push("/")}
          />

          <SingleHero
            image={events.single.acf.immagine.url}
            title={events.single.title.rendered}
          />

          <Description
            organizers={events.single.acf.organizzatori}
            dates={eventTimes}
            mapUrl={gMapsUrl}
            place={events.single.acf.luogo}
            info={htmlDescription}
          />

          <Contact mail={events.single.acf.email_organizzatore} />
        </Animated>
      </>
    );
  }
}

Single.propTypes = {
  events: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    events: {
      single: state.events.data.filter(
        e => e.id === parseInt(ownProps.match.params.id)
      )[0],
      isLoading: state.events.isLoading
    }
  };
};

export default connect(mapStateToProps)(Single);
