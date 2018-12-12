import React from "react";
import PropTypes from "prop-types";
import "./CardDetails.scss";
import { CalendarTodayIcon, LocationOnIcon } from "mdi-react";

export const CardDetails = ({ endDate, date, location }) => {
  return (
    <>
      <p className="cdetails__time white">
        <CalendarTodayIcon className="cdetails__icon" size={20} /> {date} -{" "}
        {endDate}
      </p>
      <p className="cdetails__place white">
        <LocationOnIcon className="cdetails__icon" size={20} /> {location}
      </p>
    </>
  );
};

CardDetails.propTypes = {
  endDate: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};
