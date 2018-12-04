import React from "react";
import styled, { css } from "react-emotion";
import { NavLink } from "react-router-dom";
import { InfoOutlineIcon, NotificationsNoneIcon} from "mdi-react";
import Logo from "../logo300x90.png";

const Header = () => {

  const Container = styled("div")`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    height: 12vh;
    justify-content: space-around;
    align-items: center;
    color: #333;
    transition: all 0.3s ease-in;
    @media (min-width: 740px) {
      display: none;
    }
  `;
  const IconStyle = css`
    color: #7f8483;
    padding-top: 2px;
  `;
  
  return (
    <React.Fragment>
      <Container>
        <NavLink to="/informazioni">
          <InfoOutlineIcon className={IconStyle} size={26} />
        </NavLink>
        <img src={Logo} alt="Logo" height="20px" />
        <NavLink to="/notifiche">
          <NotificationsNoneIcon className={IconStyle} size={26} />
        </NavLink>
      </Container>
    </React.Fragment>
  );
};

export default Header;