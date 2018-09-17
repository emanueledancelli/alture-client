import React, { Component } from "react";
import styled, { css } from "react-emotion";
import posed, { PoseGroup } from "react-pose";

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 200
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { type: "tween", duration: 200 }
  }
});

const StyledModal = styled(Modal)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
`;

class NotificationModal extends Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    this.setState({
      showModal: true
    });
  }

  handleStuff = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { isVisible, closeModal } = this.props;
    const { showModal } = this.state;

    if (isVisible) {
      return (
        <PoseGroup>
          {showModal ? (
            <StyledModal onClick={this.handleStuff}>
              <div className="onesignal-customlink-container" />
            </StyledModal>
          ) : null}
        </PoseGroup>
      );
    } else {
      return null;
    }
  }
}

export default NotificationModal;
