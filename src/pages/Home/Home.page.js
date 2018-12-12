import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CardList } from "./components";
import posed from "react-pose";
import { ScrollToTop, Seo, Spinner } from "components/common";
import { Header, Navigation } from "components";
import Logo from "logo.png";

const Animated = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    transition: {
      y: { ease: "easeOut", duration: 400 },
      opacity: { ease: "easeOut", duration: 400 }
    }
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      y: { ease: "easeOut", duration: 400 },
      opacity: { ease: "easeOut", duration: 400 }
    }
  }
});

const Home = ({ events }) => {
  return (
    <>
      <Header />
      <Animated>
        <Seo
          title="Home - Alture"
          description="Homepage dell'iniziativa Alture"
          url="https://alture.org"
          image={Logo}
        />
        {events.isLoading ? <Spinner /> : <CardList events={events.data} />}
      </Animated>
    </>
  );
};

Home.propTypes = {
  events: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(Home);
