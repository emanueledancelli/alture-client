import React, { Component } from "react";
import styled, { css } from "react-emotion";
import posed, { PoseGroup } from "react-pose";
import Logo from "../Logo/Logo";
import { CloseIcon } from "mdi-react";

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
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Header = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: flex-end;
`;

const Body = styled("div")`
  flex: 1;
`;

const Footer = styled("div")`
  display: flex;
  align-content: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 5%;
`;

class InfoModal extends Component {
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
              <Header>
                <CloseIcon size={26} />
              </Header>
              <Body>
                <Logo />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <span>Contattaci qui</span>
                <p>mail@mail.com</p>
              </Body>
              <Footer>
                <p>privacy policy</p>
                <p>ed</p>
              </Footer>
            </StyledModal>
          ) : null}
        </PoseGroup>
      );
    } else {
      return null;
    }
  }
}

export default InfoModal;
