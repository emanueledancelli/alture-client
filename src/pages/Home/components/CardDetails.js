import React from "react";
import "./CardDetails.scss"
import { CalendarTodayIcon, LocationOnIcon } from "mdi-react";

export const CardDetails = props => {

  return (
    <>
      
      <p className="cdetails__time white">
        <CalendarTodayIcon className="cdetails__icon" size={20} /> {props.date} - {props.endDate}
      </p>
      <p className="cdetails__place white">
        <LocationOnIcon className="cdetails__icon" size={20} /> {props.location}
      </p>

    </>
  );
};

