import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import {
  NotificationsNoneIcon,
  NotificationsOffIcon,
  NotificationsActiveIcon,
  CloseCircleOutlineIcon
} from "mdi-react";
import { Link } from "react-router-dom";
import Logo from "assets/logo.jpg";
import Facebook from "assets/facebook-brands.svg";
import Instagram from "assets/instagram-brands.svg";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    not: state.notifications.permission
  };
};

class MainHeader extends React.Component {
  render() {
    let not = Notification.permission;
    let pickNotificationIcon;

    if (not === "default") {
      pickNotificationIcon = (
        <NotificationsNoneIcon className="header__icon" size={20} />
      );
    }
    if (not === "granted") {
      pickNotificationIcon = (
        <NotificationsActiveIcon className="header__icon" size={20} />
      );
    }
    if (not === "denied") {
      pickNotificationIcon = (
        <NotificationsOffIcon className="header__icon" size={20} />
      );
    }

    return (
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="Logo" height="16px" />
        </Link>
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
          <Link to="/notifiche">{pickNotificationIcon}</Link>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(MainHeader);

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

Header.propTypes = {
  close: PropTypes.bool
};
