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
      let today = new Date()
      let dateObj = new Date(today.getTime() - (24 * 60 * 60 * 1000));
      let month = dateObj.getUTCMonth() + 1; 
      let day = (dateObj.getDate() < 10 ? '0' : '') + dateObj.getDate();;
      let year = dateObj.getUTCFullYear();
      let newDate = `${year}${month}${day}`;
      this.setState({ today: newDate })
    }

    fetchEvents = () => {
      $.get("/eventi/?filter[meta_key]=data_inizio&filter[meta_value]=" + this.state.today + "&filter[meta_compare]=>")
        .then(res => {
          this.setState({ events: res.data, isLoading: false });
        })
        .then(() => {
          //let filteredEvents = this.state.events.filter(e => e.acf.data_inizio >= this.state.today)
          let sortedEvents = _.orderBy(this.state.events, "acf.data_inizio");
          this.setState({ events: sortedEvents })
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
