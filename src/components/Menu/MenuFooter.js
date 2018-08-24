import React from 'react';
import styled from 'react-emotion';

const MenuFooter = () => {
   
    const Header = styled('div')`
        width: 85%;
        height: 14vh;
        font-size: 1.3em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    `
    const Footer = styled('div')`
        width: 85%;
        height: 9vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba(79, 79, 79, 0.5);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        font-size: 0.8em;
        font-weight: 600;
    `

    render (
        <Footer>
            <p>Privacy policy</p>                
        </Footer> 
    );
}

export default MenuFooter;