import React, {Component} from 'react';
import styled from "react-emotion";
import InfoHeader from '../Info/InfoHeader';
import $ from "../../config.js";

class Privacy extends Component {
    state = {
        privacy: ""
    }

    componentDidMount () {
        this.getPrivacy()
        this.scrollToTop()
    }

    scrollToTop = () => window.scrollTo(0, 0);

    getPrivacy = () => {
        $.get(`/pages/60`)
            .then(res => {
                this.setState({ privacy: res.data.content.rendered })
            })
            .catch(err => console.log(err));
    };

    createPrivacy = () => {
        return {__html:this.state.privacy}
      }
    

    render() {
 
    const Body = styled("div")`
        margin-top: 14vh;
        flex: 1;
        padding: 5%;
    `
    const Footer = styled("div")`
        display: flex;
        flex-direction: row;
        padding-right: 5%;
        padding-left: 5%;
        justify-content: flex-end;
        align-items: center;
        color: #828282;
        border-top: 1px solid rgba(0,0,0,0.2);
        font-size: 0.8em;
        & a {
            color: #828282;
        }
    `

    const Text = styled("p")`
        font-size: 1em;
        line-height: 180%;
        color: #333;
        margin-bottom: 0;
        margin-top: 20px;
    `   

    return (
        <React.Fragment>
            <InfoHeader
                pageTitle="Privacy Policy"
                onClick={() => this.props.history.goBack() } 
            />
            <Body>
            <div dangerouslySetInnerHTML={this.createPrivacy()}></div>
            </Body>
            <Footer>
                <p><a href="https://github.com/emanueledancelli" target="_blank" rel="noopener noreferrer">ED</a></p>
            </Footer>
        </React.Fragment>            
    )
    }
}

export default Privacy;