import React, {Component} from 'react';
import styled from "react-emotion";
import InfoHeader from '../Info/InfoHeader';
import Spinner from '../../components/Spinner/Spinner';
import $ from "../../config.js";

class Privacy extends Component {
    state = {
        isLoading: false,
        privacy: ""
    }

    componentDidMount () {
        this.setState({ isLoading: true });
        this.getPrivacy()
        this.scrollToTop()
    }

    scrollToTop = () => window.scrollTo(0, 0);

    getPrivacy = () => {
        $.get(`/pages/60`)
            .then(res => {
                this.setState({ 
                    privacy: res.data.content.rendered,
                    isLoading: false
                 })
            })
            .catch(err => console.log(err));
    };

    createPrivacy = () => {
        return {__html:this.state.privacy}
      }
    

    render() {
    
    const { isLoading } = this.state
 
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
    
    return (
        <React.Fragment>
            <InfoHeader
                pageTitle="Privacy Policy"
                onClick={() => this.props.history.goBack() } 
            />
            <Body>
            {isLoading ? (<Spinner />) : <div dangerouslySetInnerHTML={this.createPrivacy()}></div>}
            </Body>
            <Footer>
                <p><a href="https://github.com/emanueledancelli" target="_blank" rel="noopener noreferrer">ED</a></p>
            </Footer>
        </React.Fragment>            
    )
    }
}

export default Privacy;