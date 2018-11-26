import React, {Component} from 'react';
import styled, {css} from "react-emotion";
import { Link } from "react-router-dom";
import InfoHeader from '../Info/InfoHeader';

class Notifications extends Component {
    state = {
        isSubscribed: true,
        supported: true
    }
    
    componentDidMount () {
        this.scrollToTop()
        this.handleNotification()
    }

    scrollToTop = () => window.scrollTo(0, 0);

    subscribe = () => {
        var OneSignal = window.OneSignal || [];
        OneSignal.push(["registerForPushNotifications"]);
      }

    handleNotification = () => {
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
        if (!OneSignal.isPushNotificationsSupported()) {
            this.setState({ supported: false })
            return; //if not supported fuck it show info
        }
        OneSignal.isPushNotificationsEnabled(function(isEnabled) {
            if (isEnabled) {
                this.setState({ isSubscribed: true }) // show already subscribed prompt
            } else {
                this.setState({ isSubscribed: false }) // showsubscribe prompt, onclick launch this.subscribe
            }
        });
    });
    }

    render() {
 
    const Body = styled("div")`
        margin-top: 14vh;
        padding: 5%;
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
    `
    
    const paddingRight = css`
        padding-right: 5%;
    `

    const paddingLeft = css`
        margin-left: 5%;
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
            {/* <div className="onesignal-customlink-container"></div> */}
            { this.state.isSubscribed ? (<p>DISATTIVA LE NOTIFICHE</p>) : (<p onClick={this.subscribe}>ATTIVA LE NOTIFICHE</p>)}
            { this.state.supported ? null : <p>Le notifiche non sono supportate dal browser in uso ;(</p>}
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