import React from "react";
import "./NoEvents.scss";

export const NoEvents = () => {
  return (
    <div className="noevents__container">
      <div className="noevents__content">
        <span>:(</span>
        <br />
        <br />
        <span>Sembra non ci siano eventi in programma al momento.</span>
        <br />
        <br />
      </div>
    </div>
  );
};
