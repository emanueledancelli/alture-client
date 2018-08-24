import React from 'react';
import styled from 'react-emotion';
import posed from 'react-pose';

import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import MenuFooter from './MenuFooter';

const Menu = ({ handleCloseMenu }) => {

    const Shade = posed.div({
        enter: { opacity: 1 },
        exit: { opacity: 0 }
      });
      

    const Wrapper =  styled(Shade)`
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background-color: rgba(10, 21, 60, 0.5);
    `

    const Container = styled('div')`
        height: 100vh;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #f6f6f6;
        -webkit-box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        -moz-box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
        box-shadow: 5px 5px 24px -2px rgba(10,21,60,0.62);
    `

    return (
            <Wrapper onClick={handleCloseMenu}>
                <Container>
                    <MenuHeader />
                    <MenuBody />
                    <MenuFooter />
                </Container>
            </Wrapper>
    );
}

export default Menu;