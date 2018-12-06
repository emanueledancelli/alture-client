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

    const { store } = this.props



    return (
      <>

        <ScrollToTop />

        <Seo 
          title="Home - Alture"
          description="Homepage dell'iniziativa Alture" 
          url="https://alture.org" 
          image={Logo}
        />
        {/* <CardList 
          events={this.props.events}
        /> */}
      
      </>
    );
  }
}

Home.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  fetchEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);