import React from 'react';
import styled from 'react-emotion';
import posed, { PoseGroup } from 'react-pose';

const EventHeader = (props) => {

    const AnimationGroup = posed.div({
        enter: { staggerChildren: 50 },
        exit: { staggerChildren: 20, staggerDirection: -1 }
    });

    const SingleAnimatedElement = posed.div({
        enter: { y: 0, opacity: 1 },
        exit: { y: 50, opacity: 0 }
    })
    
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