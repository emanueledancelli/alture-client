import React from 'react';
import styled, { css } from 'react-emotion';
import { InfoOutlineIcon, NotificationsNoneIcon } from 'mdi-react';
import Logo from '../Logo/Logo'

const AppHeader = ({ handleModal }) => {

    const Container = styled('div')`
      display: flex;
      flex-direction: row;
      width: 100%;
      background-color: white;
      height: 14vh;
      justify-content: space-around;
      align-items: center;
      color: #333;
      font-size: 1.3em;
      transition: all 0.3s ease-in;
      @media (min-width: 740px) {
        display: none;
      }
    `
    const IconStyle = css`
      color: #B8C6E1;
    `
    return (
      <Container>
        <InfoOutlineIcon onClick={handleModal} className={ IconStyle } size={26}/>
        <Logo />
        <NotificationsNoneIcon className={ IconStyle } size={26} />
      </Container>
    );
  }

export default AppHeader;
