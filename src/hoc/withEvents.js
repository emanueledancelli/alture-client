import React, { Component } from "react";
import Spinner from "../components/Spinner/Spinner";
import _ from 'lodash';
import $ from "../config";

const withEvents = WrappedComponent => {
  return class withEvents extends Component {
    state = {
      isLoading: false,
      events: [],
    };

    beforeMount

    componentWillMount() {
      this.getDate();
    }

    componentDidMount() {
      this.setState({
        isLoading: true
      });
      this.fetchEvents();
    }

    getDate = () => {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1; 
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();
      let newDate = `${year}${month}${day}`;
      this.setState({ today: newDate })
    }

    fetchEvents = () => {
      $.get("/eventi/?filter[meta_key]=data_inizio&filter[meta_value]=" + this.state.today + "&filter[meta_compare]=>")
        .then(res => {
          let sortedEvents = _.orderBy(res.data, "acf.data_inizio");
          this.setState({ events: sortedEvents, isLoading: false });
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
