import React from "react";
import { SyncIcon } from "mdi-react";
import "./Spinner.scss";

export const Spinner = () => {
  return (
    <div className="spinner__container">
      <SyncIcon className="spinner__spinning" size={26} />
      <p>Caricamento ...</p>
    </div>
  );
};
