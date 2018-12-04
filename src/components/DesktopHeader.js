import React from "react";
import "./DesktopHeader.scss";
import { NavLink, Link } from "react-router-dom";
import { InfoOutlineIcon, NotificationsNoneIcon, HomeOutlineIcon, MapOutlineIcon } from "mdi-react";
import Logo from "../logo300x90.png";

const DesktopHeader = () => {

  return (
    <>
        <div className="dheader__container">
          <Link to="/">
            <img src={Logo} alt="Logo" height="30px" />
          </Link>
        <div className="dheader__menu">
            <div>
            <NavLink to="/" className="dheader__link" activeClassName="dheader__link--active" exact>
                <HomeOutlineIcon className="dheader__icon" size={26} />
                <span className="dheader__text">Home</span>
            </NavLink>
            </div>
            <div>
            <NavLink to="/mappa" className="dheader__link" activeClassName="dheader__link--active" exact>
                <MapOutlineIcon className="dheader__icon" size={26} />
                <span className="dheader__text">Mappa</span>
            </NavLink>
            </div>
            <div>
            <NavLink to="/informazioni" className="dheader__link" activeClassName="dheader__link--active" exact>
                <InfoOutlineIcon className="dheader__icon" size={26} />
                <span className="dheader__text">Info</span>
            </NavLink>
            </div>
            <div>
            <NavLink to="/notifiche" className="dheader__link" activeClassName="dheader__link--active" exact>
                <NotificationsNoneIcon className="dheader__icon" size={26} />
                <span className="dheader__text">Notifiche</span>
            </NavLink>
            </div>
        </div>
        </div>
    </>
  );
};

export default DesktopHeader;