import React, {Component} from 'react';
import styled, {css} from "react-emotion";
import { Link } from "react-router-dom";
import InfoHeader from '../Info/InfoHeader';

class Notifications extends Component {
    
    componentDidMount () {
        this.scrollToTop()
    }

    scrollToTop = () => window.scrollTo(0, 0);

    reloadPage = () => Location.reload() 

    render() {
 
    const Body = styled("div")`
        margin-top: 14vh;
        padding: 5%;
        @media (min-width: 740px) {
            padding: 0%;
          }
    `
    const Footer = styled("div")`
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        color: #828282;
        border-top: 1px solid rgba(0,0,0,0.2);
        font-size: 0.8em;
        & a {
            color: #828282;
        }
        @media (min-width: 740px) {
            width: 940px;
          }
    `
    
    const paddingRight = css`
        padding-right: 5%;
        @media (min-width: 740px) {
            padding: 0%;
          }
    `

    const paddingLeft = css`
        padding-left: 5%;
        @media (min-width: 740px) {
            padding: 0%;
          }
        `
    const marginBottom = css`
        margin-bottom: 40px;
    `


    return (
        <React.Fragment>
            <InfoHeader
                pageTitle="Notifiche"
                onClick={() => this.props.history.goBack() } 
            />
            <Body>
            <h1 className={marginBottom}>Notifiche</h1>
            <div className="onesignal-customlink-container"></div>
            </Body>
            <Footer>
                <div className={paddingLeft}>
                    <Link to="/privacypolicy">
                        <p>Privacy Policy</p>
                    </Link>
                </div>
                <p className={paddingRight}><a href="https://github.com/emanueledancelli" target="_blank" rel="noopener noreferrer">ED</a></p>
            </Footer>
        </React.Fragment>            
    )
    }
}

export default Notifications;