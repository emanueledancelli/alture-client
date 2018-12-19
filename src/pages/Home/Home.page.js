import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CardList } from "./components";
import { Seo, Spinner, Hero, Header } from "components/common";
import { getDate } from "utils";
import Logo from "logo.png";

const SeoTags = () => {
  return (
    <Seo
      title="Home - Alture"
      description="Homepage dell'iniziativa Alture"
      url="https://alture.org"
      image={Logo}
    />
  );
};

class Home extends React.Component {
  render() {
    const { isLoading, upcoming, past, ui } = this.props;

    const eventsList = {
      events: []
    };

    if (ui.selectedValue === "In arrivo") {
      eventsList.events = upcoming;
    }

    if (ui.selectedValue === "Passati") {
      eventsList.events = past;
    }

    console.log(this.props);
    return (
      <>
        <SeoTags />
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
  ui: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    ui: state.ui,
    isLoading: state.events.isLoading,
    past: state.events.data,
    upcoming: state.events.data.filter(e => e.acf.data_inizio >= getDate())
  };
};

export default connect(mapStateToProps)(Home);
