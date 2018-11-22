import React, { Component } from "react";
import Spinner from "../components/Spinner/Spinner";
import $ from "../config";
import _ from "lodash";

const withEvents = WrappedComponent => {
  return class withEvents extends Component {
    state = {
      isLoading: false,
      events: []
    };

    componentDidMount() {
      this.setState({
        isLoading: true
      });
      this.fetchEvents();
    }

    fetchEvents = () => {
      $.get("/eventi")
        .then(res => {
          let sortedRes = _.sortBy(res.data, "inizio");
          this.setState({ events: sortedRes, isLoading: false });
        })
        .catch(err => console.log(err));
    };

    render() {
      const { isLoading, events } = this.state;

      return isLoading ? <Spinner /> : <WrappedComponent events={events} />;
    }
  };
};

export default withEvents;
