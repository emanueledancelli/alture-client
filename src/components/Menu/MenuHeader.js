import React from 'react';
import styled, { css } from 'react-emotion';
import { KeyboardBackspaceIcon } from 'mdi-react';

const MenuHeader = (props) => {
   
    const Header = styled('div')`
        width: 85%;
        height: 14vh;
        font-size: 1.2em;
        font-weight: 300;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #333;
    `
    const fixAlignment = css`
        display: flex;
        align-items: center;                
        justify-content: flex-start;
    `
    const iconMargin = css`
        margin-right: 20px;
    `

    return (
        <Header>
            <span className={ fixAlignment}>
                <KeyboardBackspaceIcon
                    className={ iconMargin } 
                    size={36}
                    onClick={props.onClick} />
                Menu
            </span>  
        </Header>
    );
}

export default MenuHeader;