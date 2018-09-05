import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import posed, { PoseGroup } from 'react-pose';

const Modal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 200
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { type: 'tween', duration: 200 }
    }
});

const StyledModal = css`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    z-index: 100;
`
class InfoModal extends Component {
    state = {
        showModal: false
    }
    
    componentDidMount() {
       this.setState({
           showModal: true
       })
    }

    handleStuff = () => {
        this.setState({
            showModal: false
        })
    }


    render() {
    
        const { isVisible, closeModal } = this.props
        const {showModal} = this.state 

        if(isVisible) {
            return (
                <PoseGroup>
                    {showModal ? <Modal className={StyledModal} onClick={this.handleStuff} /> : null}
                </PoseGroup>
            )
        } else {
            return null
        }
    }
}

export default InfoModal;