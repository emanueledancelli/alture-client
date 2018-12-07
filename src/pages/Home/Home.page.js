import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchEvents } from "actions/eventsActions";
import { connect } from "react-redux";
import { CardList } from "./components";
import { Seo, ScrollToTop, Spinner } from "components/common";
import Logo from "logo.png";

class Home extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {

    const { events } = this.props

    return (
      <>

        <ScrollToTop />

        <Seo 
          title="Home - Alture"
          description="Homepage dell'iniziativa Alture" 
          url="https://alture.org" 
          image={Logo}
        />

        {events.isLoading 
        ? <Spinner />
        : <CardList 
            events={events.data}
          />}

      
      </>
    );
  }
}

Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);