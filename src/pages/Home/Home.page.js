import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CardList } from "./components";
import posed from 'react-pose';
import { Seo, ScrollToTop, Spinner } from "components/common";
import Logo from "logo.png";

const Animated = posed.div({
  enter: { 
    y: 0, 
    opacity: 1,
    transition: {
      y: { ease: 'easeOut', duration: 200 },
    } 
  },
  exit: { 
    y: '100%',
    opacity: 0,
    transition: {
      y: { ease: 'easeOut', duration: 200 },
    }  
  },
});

class Home extends Component {

  render() {

    const { events } = this.props

    return (
      <Animated>

        <ScrollToTop />

        <Seo 
          title="Home - Alture"
          description="Homepage dell'iniziativa Alture" 
          url="https://alture.org" 
          image={Logo}
        />

        {events.isLoading 
          ? <Spinner />
          : <CardList events={events.data} />
        }

      
      </Animated>
    );
  }
}

Home.propTypes = {
  events: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(Home);