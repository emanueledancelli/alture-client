import React from "react";
import styled, { css } from "react-emotion";

const callToAction = props => {
  
  const Container = styled("div")`
    padding-right: 5%;
    padding-left: 5%;
    background-color: #6D9B8D;
  `;

  const CtaButton = styled("div")`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Info = styled("p")`
    font-weight: 600;
    font-size: 1em;
    color: #fff;
  `;

  const marginFixTop = css`
    margin: 0;
  `;

  return (
    <a href={"mailto:" + props.mail}>
      <Container>
        <CtaButton>
            <Info className={marginFixTop}>Contatta gli organizzatori</Info>
        </CtaButton>
      </Container>
    </a>
  );
};

export default callToAction;