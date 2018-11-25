import React from "react";
import styled, { css } from "react-emotion";
import { NavLink } from "react-router-dom";
import { InfoOutlineIcon, NotificationsNoneIcon } from "mdi-react";
import Logo from "../Logo/Logo";

const AppHeader = ({ handleNotificationPanel }) => {
  const Container = styled("div")`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    height: 14vh;
    justify-content: space-around;
    align-items: center;
    color: #333;
    font-size: 1.3em;
    transition: all 0.3s ease-in;
    @media (min-width: 740px) {
      display: none;
    }
  `;
  const IconStyle = css`
    color: #b8c6e1;
  `;
  return (
    <Container>
      <NavLink to="/informazioni">
        <InfoOutlineIcon className={IconStyle} size={26} />
      </NavLink>
      <Logo />
      <NotificationsNoneIcon
        onClick={handleNotificationPanel}
        className={IconStyle}
        size={26}
      />
    </Container>
  );
};

export default AppHeader;
