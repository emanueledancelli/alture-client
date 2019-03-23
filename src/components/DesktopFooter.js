import React from "react";
import "./DesktopFooter.scss";

import { Link } from "react-router-dom";
import Logo from "assets/logoMarzo.png";

export const DesktopFooter = () => {
  return (
    <>
      <footer className="dfooter">
        <div className="dfooter__container">
          <div className="dfooter__logo">
            <img src={Logo} alt="Logo" height="60px" />
          </div>
          <div className="dfooter__links">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/esplorando-i-confini">
              <p>Informazioni</p>
            </Link>
            <Link to="/notifiche">
              <p>Notifiche</p>
            </Link>
            <Link to="/feedback">
              <p>Feedback</p>
            </Link>
            <Link to="/privacypolicy">
              <p>Privacy policy</p>
            </Link>
          </div>
          <div className="dfooter__socials">
            <a href="mailto:info@associazioneilcapannone.org">
              <p>Mail</p>
            </a>
            <a
              href="https://www.instagram.com/a.alture/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Instagram</p>
            </a>
            <a
              href="https://www.facebook.com/A.Alture/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
