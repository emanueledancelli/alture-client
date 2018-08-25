import React from 'react';
import styled, { keyframes } from 'react-emotion';

import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import MenuFooter from './MenuFooter';
import Shade from '../Shade/Shade';

const Menu = ({ handleCloseMenu }) => {
          
    const slideIn = keyframes`
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0)
        }
    `

    const Container = styled('div')`
        height: 100vh;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #f6f6f6;
        z-index: 100;
        -webkit-box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        -moz-box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        animation: ${slideIn} 500ms ease-in;
        transition: all 0.5s ease-in;
    `
 
    return (
            <Shade onClick={handleCloseMenu}>
                <Container>
                    <MenuHeader />
                    <MenuBody />
                    <MenuFooter />
                </Container>
            </Shade>
    );
}

export default Menu;