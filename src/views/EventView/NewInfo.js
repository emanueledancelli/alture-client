import React from "react";
import { CalendarDayIcon, LocationIcon, LabelOutlineIcon } from "mdi-react";

const NewInfo = props => {
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
      color: "#B8C6E1"
    }
  };

  return (
    <React.Fragment>
      <p style={styles.mona} className={props.className}>
        <CalendarDayIcon style={styles.icon} size={20} />
        {props.startDate} - {props.endDate}
      </p>
      <p style={styles.p} className={props.className}>
        <LocationIcon style={styles.icon} size={20} />
        {props.location}
      </p>
      <p style={styles.p} className={props.className}>
        <LabelOutlineIcon style={styles.icon} size={20} />
        {props.tags}
      </p>
    </React.Fragment>
  );
};

export default NewInfo;
