import React from 'react';
import styled, { css } from 'react-emotion';
import { CloseCircleOutlineIcon } from 'mdi-react';


const Info = () => {

    const Container = styled('div')`
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `
    const InfoHeader = css`
        align-self: flex-end;
        padding: 3%;
    `


    return (
        <Container>
            <div className={ InfoHeader } onClick={() => this.props.history.goBack()}>
               <CloseCircleOutlineIcon size={26} />            
            </div>
            <div>   
                <p>body</p>
            </div>
            <div>
                Privacy Policy
            </div>
        </Container>
    );
}

export default Info;