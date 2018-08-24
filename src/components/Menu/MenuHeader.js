import React from 'react';
import styled from 'react-emotion';

import Logo from '../Logo/Logo';

const MenuHeader = () => {
   
    const Header = styled('div')`
        width: 85%;
        height: 14vh;
        font-size: 1.3em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    `

    render (
        <Header>
            <Logo />  
        </Header>
    );
}

export default MenuHeader;