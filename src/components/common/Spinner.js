import React from 'react';
import styled, { css, keyframes } from 'react-emotion';
import { SyncIcon } from 'mdi-react';

const Spinner = () => {
    
    const Container = styled('div')`
        height: 77vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:  center;
        justify-content: center;
    `
 
    const spin = keyframes`
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(360deg)
        }
    `

    const Spinning = css`
        animation: ${spin} 2s linear infinite;
    `

    return (
        <Container>
            <SyncIcon className={ Spinning } size={26} />
            <p>Caricamento ...</p>
        </Container>
    );
}

export default Spinner;