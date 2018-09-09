import React from "react";
import { CalendarTodayIcon, LocationOnIcon } from "mdi-react";

const PlaceAndDate = props => {
  const styles = {
    p: {
      margin: "0px",
      paddingTop: "0.5em",
      fontSize: "1em",
      fontWeight: "500",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    mona: {
      margin: "0px",
      fontSize: "1em",
      fontWeight: "500",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      textTransform: "capitalize"
    },
    icon: {
      paddingRight: "8px",
      color: "#b8b8b8"
    }
  };

  return (
    <React.Fragment>
      <p style={styles.mona} className={props.className}>
        <CalendarTodayIcon style={styles.icon} size={20} />
        {props.date} - {props.endDate}
      </p>
      <p style={styles.p} className={props.className}>
        <LocationOnIcon style={styles.icon} size={20} />
        {props.location}
      </p>
    </React.Fragment>
  );
};

export default PlaceAndDate;
