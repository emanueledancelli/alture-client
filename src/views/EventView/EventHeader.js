import React from 'react';
import styled from 'react-emotion';

const EventHeader = (props) => {
    
    const Container = styled('div')`
        height: 40vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://api.dancel.li${props.image}) center;
    `
    const Text = styled('p')`
        font-size: 0.9em;
        color: #bdbdbd;
        margin-top: 10px;
        `
    const Paddings = styled('div')`
        padding-left: 5%;
        padding-right: 5%;
        & h1 {
            margin-bottom: 0;
        }
    `
    
    return (
        <Container>
            <Paddings>
                <h1 className="title white">{props.title}</h1>
                <Text>Alture Festival &#38; Padile Running Team</Text>
            </Paddings>
        </Container>
    );
}

export default EventHeader;