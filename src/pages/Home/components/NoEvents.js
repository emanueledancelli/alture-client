import React from "react";
import "./NoEvents.scss";
import { Link } from "react-router-dom";

export const NoEvents = () => {
  return (
    <div className="noevents__container">
      <div className="noevents__content">
        <p>:(</p>
        <p>Non ci sono eventi in programma al momento.</p>
        <p>
          Puoi seguire Alture su{" "}
          <a
            href="https://www.instagram.com/a.alture/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          ,{" "}
          <a
            href="https://www.facebook.com/A.Alture/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          e attivare le <Link to="/notifiche">notifiche</Link> per rimanere
          aggiornato.
        </p>
      </div>
    </div>
  );
};
