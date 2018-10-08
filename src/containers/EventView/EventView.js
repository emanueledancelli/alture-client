import React, { Component } from "react";
import styled, { css, keyframes } from "react-emotion";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "mdi-react";
import $ from "../../config.js";
import moment from "moment";
import "moment/locale/it";

import SingleHeader from "../../components/SingleHeader/SingleHeader.js";
import Spinner from "../../components/Spinner/Spinner.js";
import EventHeader from "./EventHeader.js";
import NewInfo from "./NewInfo.js";
import CallToAction from "./calltoaction.js";

class SingleEvent extends Component {
  state = {
    isLoading: false,
    isDescriptionExtended: false,
    selectedEvent: {
      image: "",
      name: "",
      description: "",
      tags: ""
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.scrollToTop();
    this.getEvents();
  }

  scrollToTop = () => window.scrollTo(0, 0);

  getEvents = () => {
    $.get(`/event/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ selectedEvent: res.data, isLoading: false });
        console.log(this.state.selectedEvent);
      })
      .catch(err => console.log(err));
  };

  handleFullDescriptionButton = () => {
    this.setState({
      isDescriptionExtended: !this.state.isDescriptionExtended
    });
  };

  sliceName = () => {
    if (this.state.selectedEvent.name.length < 25) {
      return this.state.selectedEvent.name;
    }
    return this.state.selectedEvent.name.slice(0, 21) + "...";
  };

  sliceDescription = () => {
    return this.state.selectedEvent.description.slice(0, 200) + "...";
  };

  render() {
    const fadeIn = keyframes`
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        `;

    const MainInfo = styled("div")`
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 8%;
      padding-bottom: 5%;
      color: #333;
    `;
    const Description = css`
      padding-top: 5%;
      padding-right: 5%;
      padding-left: 5%;
    `;
    const descriptionText = css`
      font-size: 1em;
      line-height: 180%;
      color: #333;
      animation: ${fadeIn} 0.5s ease-out;
      margin-bottom: 0;
      margin-top: 20px;
    `;
    const helperText = css`
      font-weight: 400;
      color: #bdbdbd;
      font-size: 1em;
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;
    const informazioni = css`
      font-weight: 700;
      font-size: 1.3em;
      color: #728dc3;
      padding-bottom: 30px;
    `;
    const showMore = css`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding-right: 3%;
      padding-bottom: 3%;
    `;

    const { selectedEvent, isLoading, isDescriptionExtended } = this.state;
    const startDate = moment(selectedEvent.start)
      .locale("it")
      .format("LLLL");
    const endDate = moment(selectedEvent.end)
      .locale("it")
      .format("LT");
    const currentUrl = "%PUBLIC_URL%" + this.props.location.pathname;
    const slicedName = this.sliceName();
    const slicedDescription = this.sliceDescription();

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <SingleHeader
          url={currentUrl}
          name={slicedName}
          image={selectedEvent.image.url}
          onClick={() => this.props.history.goBack()}
        />
        <EventHeader
          image={selectedEvent.image.url}
          title={selectedEvent.name}
        />
        <MainInfo>
          <NewInfo
            location={selectedEvent.place}
            startDate={startDate}
            endDate={endDate}
            tags={selectedEvent.tags}
          />
        </MainInfo>
        <div className={Description}>
          <span className={informazioni}>Informazioni</span>
          {isDescriptionExtended ? (
            <p className={descriptionText}>{selectedEvent.description}</p>
          ) : (
            <p className={descriptionText}>{slicedDescription}</p>
          )}
          <div className={showMore} onClick={this.handleFullDescriptionButton}>
            {isDescriptionExtended ? (
              <p className={helperText}>
                Visualizza meno <ArrowDropUpIcon size={26} />
              </p>
            ) : (
              <p className={helperText}>
                Visualizza descrizione completa <ArrowDropDownIcon size={26} />
              </p>
            )}
          </div>
        </div>
        <CallToAction />
      </React.Fragment>
    );
  }
}

export default SingleEvent;
