import React from "react";
import styled, { css } from "react-emotion";
import { LabelIcon, LocationIcon, AccessTimeIcon } from "mdi-react";

const NewInfo = props => {
  const InfoText = styled("p")`
    margin: 0px;
    padding-top: 0.5em;
    font-size: 1em;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;

  const InfoContainer = styled("div")`
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: space-around;
  `;

  const iconStyle = css`
    padding-right: 8px;
    color: #6D9B8D;
  `;

  return (
    <InfoContainer>
      <InfoText>
        <LabelIcon className={iconStyle} size={20} />
        Alture Festival, Padile Running Team
      </InfoText>
      <InfoText>
        <AccessTimeIcon className={iconStyle} size={20} />
        {props.startDate} - {props.endDate}
      </InfoText>
      <InfoText>
        <LocationIcon className={iconStyle} size={20} />
        {props.location} - mostra mappa
      </InfoText>
    </InfoContainer>
  );
};

export default NewInfo;
