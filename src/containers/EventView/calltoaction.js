import React, { Component } from "react";
import { ChevronRightIcon } from "mdi-react";
import styled, { css } from "react-emotion";

const callToAction = props => {
  const Container = styled("div")`
    padding-right: 5%;
    padding-left: 5%;
    background-color: #e9ecf2;
  `;
  const CtaButton = styled("div")`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const LeftContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 8vh;
  `;

  const Info = styled("p")`
    font-weight: 700;
    font-size: 1.3em;
    color: #728dc3;
  `;

  const iconColor = css`
    color: #728dc3;
  `;

  const marginFixTop = css`
    margin: 0;
  `;

  const marginFixBottom = css`
    margin: 0;
    color: #333;
  `;

  return (
    <a href={"mailto:" + props.email}>
      <Container>
        <CtaButton>
            <Info className={marginFixTop}>Contatta organizzatori</Info>
        </CtaButton>
      </Container>
    </a>
  );
};

export default callToAction;



{/* <a href={"mailto:" + props.email}>
<Container>
  <CtaButton>
    <LeftContainer>
      <Info className={marginFixTop}>Contatti</Info>
      <p className={marginFixBottom}>{props.mail}</p>
    </LeftContainer>
    <ChevronRightIcon className={iconColor} size={50} />
  </CtaButton>
</Container>
</a> */}