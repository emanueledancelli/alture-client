import React from "react";
import "./Shade.scss";

export const Shade = ({ action, children }) => (
  <div className="shade" onClick={action}>
    {children}
  </div>
);
