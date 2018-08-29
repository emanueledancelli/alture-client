import React from "react";
import styled from 'react-emotion';
import { Link } from "react-router-dom";

const MenuItem = (props) => {

    const Item = styled('span')`
        font-size: 1em;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 500;
        display: flex;
        align-items: center;
        color: #333;
        padding-top: 10%;
        padding-bottom: 10%;
    `
    
    return (
        <Link to={props.linkTo}>
            <Item>{props.name}</Item>
        </Link> 
    );
}

export default MenuItem;