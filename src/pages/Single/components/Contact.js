import React from "react";
import "./Contact.scss"

export const Contact = mail => (
    <a href={"mailto:" + mail}>
      <div className="contact">
        <div className="contact__container">
            <p>Contatta gli organizzatori</p>
        </div>
      </div>
    </a>
);
