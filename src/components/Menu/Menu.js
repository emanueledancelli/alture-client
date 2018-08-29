import React from 'react';
import styled, { keyframes } from 'react-emotion';

import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import MenuFooter from './MenuFooter';

const Menu = ({ handleCloseMenu }) => {
          
    const slideIn = keyframes`
        from {
            opacity: 0;
            transform: translateY(100vh);
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    `

    const Container = styled('div')`
        height: 100vh;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        z-index: 100;
        -webkit-box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        -moz-box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        animation: ${slideIn} 300ms ease-out;
        transition: all 300ms ease-out;
        overflow: hidden;
    `
 
    return (
        <Container>
            <MenuHeader onClick={handleCloseMenu} />
            <MenuBody />
            <MenuFooter />
        </Container>
    );
}

export default Menu;