import React from 'react';
import styled, { css } from 'react-emotion';
import { AddBoxIcon, 
         FeedbackIcon,
         InformationIcon,
         SendIcon } from 'mdi-react';

import MenuItem from './MenuItem';

const MenuBody = () => {
   
    const Body = styled('div')`
        margin-top: 20px;
        width: 85%;
        display: flex;
        flex-direction: column;
        flex: 1;
    `
    const Icon = css`
        margin-right: 15px;
        color: #728DC3; 
    `

    return (
        <Body>
            <MenuItem linkTo="/suggerisci" name="Suggerisci un evento">
                <AddBoxIcon className={Icon} size={26} />
            </MenuItem>
            <MenuItem linkTo="/feedback" name="Feedback">
                <FeedbackIcon className={Icon} size={26} />
            </MenuItem>
            <MenuItem linkTo="/about" name="About">
                <InformationIcon className={Icon} size={26} />
            </MenuItem>
            <MenuItem linkTo="/contatti" name="Contatti">
                <SendIcon className={Icon} size={26} />
            </MenuItem> 
        </Body>
    );
}

export default MenuBody;