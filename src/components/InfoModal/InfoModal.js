import React, { Component } from "react";
import styled, { css } from "react-emotion";
import posed, { PoseGroup } from "react-pose";
import Logo from "../Logo/Logo";
import { CloseCircleOutlineIcon } from "mdi-react";

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
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  justify-content: center;
`;

const Header = styled("div")`
  display: flex;
  width: 95%;
  height: 15vh;
  align-items: center;
  justify-content: flex-end;
`;

const Body = styled("div")`
  flex: 1;
  width: 88%;
  padding-left: 6%;
  padding-right: 6%;
`;

const Footer = styled("div")`
  display: flex;
  align-content: center;
  flex-direction: row;
  width: 88%;
  padding-left: 6%;
  padding-right: 6%;
  justify-content: space-between;
  & p {
    color: #828282;
  }
`;

const iconStyle = css`
  color: #454545;
`;

const descrLong = css`
  line-height: 160%;
  margin-top: 40px;
  color: #333;
  font-size: 1em;
`;

const ContattiBox = styled("div")`
  margin-top: 50px;
  color: #333;
`;

const HalfTitle = css`
  font-size: 1.3em;
  font-weight: 700;
`;

const teamTag = css`
  color: #333;
  font-style: italic;
  margin-top: 30px;
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
    const { isVisible } = this.props;
    const { showModal } = this.state;

    if (isVisible) {
      return (
        <PoseGroup>
          {showModal ? (
            <StyledModal onClick={this.handleStuff}>
              <Header>
                <CloseCircleOutlineIcon className={iconStyle} size={30} />
              </Header>
              <Body>
                <Logo size={2} />
                <p className={descrLong}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <p className={teamTag}>Il team di Alture360</p>
                <ContattiBox>
                  <p className={HalfTitle}>Contatti</p>
                  <p>mail@mail.com</p>
                </ContattiBox>
              </Body>
              <Footer>
                <p>Privacy Policy</p>
                <p>ED</p>
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
