import React from "react";
import "./DesktopFooter.scss";

import { Link } from "react-router-dom";
import Logo from "logo.png";

export const DesktopFooter = () => {
  return (
    <>
      <footer className="dfooter">
        <div className="dfooter__container">
          <div className="dfooter__logo">
            <img src={Logo} alt="Logo" height="40px" />
          </div>
          <div className="dfooter__links">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/mappa">
              <p>Mappa</p>
            </Link>
            <Link to="/informazioni">
              <p>Informazioni</p>
            </Link>
            <Link to="/notifiche">
              <p>Notifiche</p>
            </Link>
            <Link to="/privacypolicy">
              <p>Privacy policy</p>
            </Link>
          </div>
          <div className="dfooter__socials">
            <p>
              <a href="mailto:info@associazioneilcapannone.org">Mail</a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/a.alture/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/A.Alture/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
