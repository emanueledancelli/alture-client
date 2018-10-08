import React from "react";
import styled from "react-emotion";
import { LabelIcon, LocationIcon, AccessTimeIcon } from "mdi-react";

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
      color: "#728dc3"
    }
  };

  const Container = styled("div")`
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: space-around;
  `;

  return (
    <Container>
      <p style={styles.mona} className={props.className}>
        <LabelIcon style={styles.icon} size={20} />
        Alture Festival, Padile Running Team
      </p>
      <p style={styles.p} className={props.className}>
        <AccessTimeIcon style={styles.icon} size={20} />
        {props.startDate} - {props.endDate}
      </p>
      <p style={styles.p} className={props.className}>
        <LocationIcon style={styles.icon} size={20} />
        {props.location} - mostra mappa
      </p>
    </Container>
  );
};

export default NewInfo;
