import React, { Component } from "react";
import "./Info.page.scss";
import { Link } from "react-router-dom";
import { Seo, Hero, Header } from "components/common";
import { ChevronRightIcon, WebIcon, MailOutlineIcon } from "mdi-react";
import Logo from "assets/logo.png";
import Facebook from "assets/facebook-brands.svg";
import Instagram from "assets/instagram-brands.svg";

export class Info extends Component {
  render() {
    return (
      <>
        <Seo
          title="Informazioni - Alture"
          description="Informazioni sull'iniziativa Alture"
          url="https://alture.org/informazioni"
          image={Logo}
        />

        <Header />
        <Hero title="Informazioni" />
        <div className="info">
          <div className="info__menu">
            <div className="info__menu__item">
              <ChevronRightIcon className="info__icon" size={20} />
              <Link to="/esplorando-i-confini">
                <span>Esplorando i confini</span>
              </Link>
            </div>
            <div className="info__menu__item">
              <ChevronRightIcon className="info__icon" size={20} />
              <Link to="/notifiche">
                <span>Gestisci le notifiche</span>
              </Link>
            </div>
            <div className="info__menu__item">
              <ChevronRightIcon className="info__icon" size={20} />
              <Link to="/feedback">
                <span>Dai un feedback</span>
              </Link>
            </div>
            <div className="info__menu__item">
              <ChevronRightIcon className="info__icon" size={20} />
              <Link to="/privacypolicy">
                <span>Privacy policy</span>
              </Link>
            </div>
          </div>
          <div className="info__contact">
            <span className="info__contact__before">A cura di:</span>
            <br />
            <span className="info__contact__heading">
              Associazione Il Capannone
            </span>
            <div className="info__contact__items">
              <div className="info__contact__item">
                <WebIcon className="info__icon" size={20} />
                <a
                  href="http://www.associazioneilcapannone.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Website</span>
                </a>
              </div>
              <div className="info__contact__item">
                <MailOutlineIcon className="info__icon" size={20} />
                <a
                  href="mailto:info@associazioneilcapannone.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Mail</span>
                </a>
              </div>
              <div className="info__contact__item">
                <img
                  src={Facebook}
                  className="info__icon"
                  alt="Facebook"
                  height="20px"
                  width="20px"
                />
                <a
                  href="https://www.facebook.com/A.Alture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Facebook</span>
                </a>
              </div>
              <div className="info__contact__item">
                <img
                  src={Instagram}
                  className="info__icon"
                  alt="Instagram"
                  height="20px"
                  width="20px"
                />
                <a
                  href="https://www.instagram.com/a.alture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
