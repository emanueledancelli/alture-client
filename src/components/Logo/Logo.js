import React from "react";
import styled, { css } from 'react-emotion';
import { Link } from "react-router-dom";

const Logo = () => {

    const Logo = styled('span')`
        color: #333;
    `
    const Thin = css`
        font-weight: 300
        transition: all 0.3s ease-in;
    `
    
    return (
        <Link to='/'>
            <Logo>
                <span className={Thin}>Alture</span><strong>360</strong>
            </Logo>
        </Link>
    );
    
}

export default Logo;