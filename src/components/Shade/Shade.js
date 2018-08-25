import React from 'react';
import styled, { keyframes } from 'react-emotion';

const Shade = ({ onClick, children, className } ) => {

    const fadeIn = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    ` 
    const Shade =  styled('div')`
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(10, 21, 60, 0.5);
        animation: ${fadeIn} 300ms ease-in;
        transition: all 0.5s ease-in;
    `
    
    return (
        <Shade className={className} onClick={onClick}>
            {children}
        </Shade>
    );
} 

export default Shade;