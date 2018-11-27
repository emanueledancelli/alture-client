import React from "react";
import styled, { css, keyframes } from "react-emotion";
import { NavLink, Link } from "react-router-dom";
import { InfoOutlineIcon, NotificationsNoneIcon, HomeOutlineIcon, MapOutlineIcon } from "mdi-react";
import Logo from "../../logo300x90.png";

const AppHeader = () => {
  const Shake = keyframes`
  from {
    transform: rotate(10deg)
  }
  to {
    transform: rotate(-10deg)
  }
`;
  const IconStyle = css`
    color: rgba(0,0,0,0.2);
    padding-top: 2px;
  `;
  const DesktopNavbar = styled("div")`
    display: flex;
    flex-direction: row;
    width: 940px;
    background-color: white;
    height: 12vh;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;
    color: #333;
    transition: all 0.3s ease-in;
    @media (max-width: 740px) {
      display: none;
    }
  `;
  const Menu = styled("div")`
    display: flex;
    flex-direction: row;

  `;
  const Selected = css`
    & svg {
      color: #6D9B8D;
      animation: ${Shake} 0.2s 2 ease-out;
    }
    & span {
      color: #6D9B8D;
    }
  `;
    const navbarStyle = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 25px;
    `;
    const textStyle = css`
        font-size: 0.9em;
        font-weight: 600;
        color: rgba(0,0,0,0.2);
        margin-top: 3px;
    `;

  return (
    <React.Fragment>
        <DesktopNavbar>
          <Link to="/">
            <img src={Logo} alt="Logo" height="30px" />
          </Link>
        <Menu>
            <div>
            <NavLink to="/" className={navbarStyle} activeClassName={Selected} exact>
                <HomeOutlineIcon className={IconStyle} size={26} />
                <span className={textStyle}>Home</span>
            </NavLink>
            </div>
            <div>
            <NavLink to="/mappa" className={navbarStyle} activeClassName={Selected} exact>
                <MapOutlineIcon className={IconStyle} size={26} />
                <span className={textStyle}>Mappa</span>
            </NavLink>
            </div>
            <div>
            <NavLink to="/informazioni" className={navbarStyle} activeClassName={Selected} exact>
                <InfoOutlineIcon className={IconStyle} size={26} />
                <span className={textStyle}>Info</span>
            </NavLink>
            </div>
            <div>
            <NavLink to="/notifiche" className={navbarStyle} activeClassName={Selected} exact>
                <NotificationsNoneIcon className={IconStyle} size={26} />
                <span className={textStyle}>Notifiche</span>
            </NavLink>
            </div>
        </Menu>
        </DesktopNavbar>
    </React.Fragment>
  );
};

export default AppHeader;
