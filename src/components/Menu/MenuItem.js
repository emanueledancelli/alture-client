import React from "react";
import styled from 'react-emotion';
import { Link } from "react-router-dom";

const MenuItem = (props) => {

    const Item = styled('p')`
        font-size: 1em;
        font-weight: 600;
        display: flex;
        align-items: center;
        color: #333;
    `
    
    return (
        <Link to={props.linkTo}>
            <Item>{props.children}{props.name}</Item>
        </Link> 
    );
}

export default MenuItem;