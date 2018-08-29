import React from 'react';
import styled from 'react-emotion';

import MenuItem from './MenuItem';

const MenuBody = () => {
   
    const Body = styled('div')`
        width: 85%;
        display: flex;
        flex-direction: column;
        flex: 1;
    `

    return (
        <Body>
            <MenuItem linkTo="/suggerisci" name="Suggerisci un evento" />
            <MenuItem linkTo="/feedback" name="Feedback" />
            <MenuItem linkTo="/about" name="About" />
            <MenuItem linkTo="/contatti" name="Contatti" />
        </Body>
    );
}

export default MenuBody;