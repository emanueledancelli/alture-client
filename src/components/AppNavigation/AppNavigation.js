import React from "react";
import styled, { css, keyframes } from "react-emotion";
import { NavLink } from "react-router-dom";
import { HomeOutlineIcon, MapOutlineIcon } from "mdi-react";

const AppNavigation = () => {
  const Shake = keyframes`
    from {
      transform: rotate(10deg)
    }
    to {
      transform: rotate(-10deg)
    }
  `;

  const Container = styled("div")`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 10vh;
    background-color: white;
    align-items: center;
    z-index: 98;
    justify-content: space-around;
    -webkit-box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 1.2);
    -moz-box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.2);
    @media (min-width: 740px) {
      display: none;
    }
  `;
  const Icon = css`
    color: #b8c6e1;
  `;
  const Selected = css`
    & svg {
      color: #728dc3;
      animation: ${Shake} 0.2s 2 ease-out;
    }
    & span {
      color: #728dc3;
    }
  `;
  const navbarStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const textStyle = css`
    font-size: 0.9em;
    font-weight: 600;
    color: #b8c6e1;
    margin-top: 3px;
  `;

  return (
    <Container>
      <NavLink to="/" className={navbarStyle} activeClassName={Selected} exact>
        <HomeOutlineIcon className={Icon} size={26} />
        <span className={textStyle}>Home</span>
      </NavLink>
      <NavLink
        to="/Mappa"
        className={navbarStyle}
        activeClassName={Selected}
        exact
      >
        <MapOutlineIcon className={Icon} size={26} />
        <span className={textStyle}>Mappa</span>
      </NavLink>
    </Container>
  );
};

export default AppNavigation;
