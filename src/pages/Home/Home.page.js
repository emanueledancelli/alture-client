import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CardList } from "./components";
import { Seo, Spinner, Hero, Header } from "../../components/common";
import { getDate } from "../../utils";
import { setScrollValue } from "../../actions/uiActions";

const seoTags = {
  title: "Home - Alture",
  url: "https://alture.org",
  description: "Homepage dell'iniziativa Alture",
};

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, this.props.ui.homePageScrollPosition);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.props.setScrollValue(window.scrollY);
  };

  render() {
    const { isLoading, upcoming, past, ui } = this.props;

    const eventsList = {
      events: [],
    };

    if (ui.selectedValue === "In arrivo") {
      eventsList.events = upcoming;
    }

    if (ui.selectedValue === "Passati") {
      eventsList.events = past;
    }

    return (
      <>
        <Seo {...seoTags} />
        <Header />
        <Hero title="Eventi" filter />
        {isLoading ? <Spinner /> : <CardList {...eventsList} />}
      </>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  past: PropTypes.array.isRequired,
  upcoming: PropTypes.array.isRequired,
  ui: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
    isLoading: state.events.isLoading,
    past: state.events.data.filter((e) => e.acf.data_inizio < getDate()),
    upcoming: state.events.data.filter((e) => e.acf.data_inizio >= getDate()),
  };
};

const mapDispatchToProps = {
  setScrollValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
