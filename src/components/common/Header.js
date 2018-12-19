import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { NotificationsIcon, CloseCircleOutlineIcon } from "mdi-react";
import { Link } from "react-router-dom";
import Logo from "logo.jpg";
import Facebook from "facebook-brands.svg";
import Instagram from "instagram-brands.svg";

const MainHeader = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" height="16px" />
      <div className="header__links">
        <a
          href="https://www.facebook.com/A.Alture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            className="header__icon"
            alt="Facebook"
            height="20px"
            width="20px"
          />
        </a>
        <a
          href="https://www.instagram.com/a.alture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            className="header__icon"
            alt="Facebook"
            height="20px"
            width="20px"
          />
        </a>
        <NotificationsIcon className="header__icon" size={20} />
      </div>
    </div>
  );
};

const CloseButton = () => {
  return (
    <div className="header--close">
      <div className="header--close__button">
        <Link to="/informazioni">
          <CloseCircleOutlineIcon className="header__icon" size={26} />
        </Link>
      </div>
    </div>
  );
};

export class Header extends React.Component {
  render() {
    const { close } = this.props;
    return <>{close ? <CloseButton /> : <MainHeader />}</>;
  }
}

Header.PropTypes = {
  close: PropTypes.bool
};
