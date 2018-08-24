import React from 'react';
import styled, { css } from 'react-emotion';
import { NavLink } from 'react-router-dom'
import { HomeIcon, MapIcon } from 'mdi-react';

const AppNavigation = () => {

  const Container = styled('div')`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 9vh;
    background-color: white;
    align-items: center;
    z-index: 98;
    justify-content: space-around;
    -webkit-box-shadow: 0px -4px 4px 0px rgba(0,0,0,1.2);
    -moz-box-shadow: 0px -4px 4px 0px rgba(0,0,0,0.2);
    box-shadow: 0px -4px 4px 0px rgba(0,0,0,0.2);
  `
  const Icon = css`
    color: #B8C6E1;
  `
  const Selected = css`
    & svg {
      color: #728DC3;
    }
  `

  return (
    <Container>
          <NavLink 
            to='/'
            exact
            activeClassName={ Selected }
          >
            <HomeIcon className={ Icon } size={26}/>
          </NavLink>
          <NavLink 
            to='/Mappa'
            exact
            activeClassName={ Selected }
          >
            <MapIcon className={Icon} size={26}/>         
          </NavLink>
    </Container>
  );
}

export default AppNavigation;
