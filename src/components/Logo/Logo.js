import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "react-router-dom";

const Logo = props => {
  const Logo = styled("span")`
    color: #333;
  `;
  const Thin = css`
    font-weight: 300;
  `;

  const Size = css`
    font-size: ${props.size || 1}em;
  `;

  return (
    <Link to="/">
      <Logo>
        <span className={(Thin, Size)}>Alture</span>
        <span className={Size}>
          <strong>360</strong>
        </span>
      </Logo>
    </Link>
  );
};

export default Logo;
