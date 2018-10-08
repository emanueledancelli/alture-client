import React, { Component } from "react";
import { ChevronRightIcon } from "mdi-react";
import styled, { css } from "react-emotion";

const callToAction = () => {
  const Container = styled("div")`
    padding-right: 5%;
    padding-left: 5%;
    background-color: #e9ecf2;
  `;
  const CtaButton = styled("div")`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
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

  const marginFix = css`
    margin: 0;
  `;

  return (
    <Container>
      <CtaButton>
        <LeftContainer>
          <Info className={marginFix}>Contatti</Info>
          <p className={marginFix}>mail@mail.com</p>
        </LeftContainer>
        <ChevronRightIcon className={iconColor} size={50} />
      </CtaButton>
    </Container>
  );
};

export default callToAction;
