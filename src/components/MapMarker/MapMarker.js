import React from 'react';
import styled, { css } from 'react-emotion';
import { PlaceIcon } from 'mdi-react';


const MapMarker = ({ name, date }) => {

    const Container = styled('div')`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:  center;
        margin-top: -70px;
    `
    const Info = styled('div')`
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:  center;
        border-radius: 10px;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 10px;
    `
    const titleStyle = css`
        font-weight: 600;
        font-size: 1.5em;
    `
    const dateStyle = css`
        word-wrap: nowrap;
        font-size: 1em;
    `


    const iconStyle = css`
        color: red;
        margin-top: -15px;
    `

    return (
        <Container>
            <Info>
                <span className={ titleStyle }>{ name }</span>
                <span className={ dateStyle }>{ date }</span>
            </Info>
            <PlaceIcon className={iconStyle} size={50} />
        </Container>
    );
}

export default MapMarker