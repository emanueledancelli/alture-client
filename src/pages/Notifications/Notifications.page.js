import React, {Component} from "react";
import "./Notifications.page.scss";
import { Link } from "react-router-dom";

import { PagesHeader } from "../../components";
import Spinner from "../../components/common/Spinner";

class Notifications extends Component {
    state = {
        isLoading : true
    }
    
    componentDidMount () {
        setTimeout(this.renderPage, 1000)
        this.scrollToTop()
        this.initOneSignal("mount")
    }

    componentWillUnmount() {
        this.initOneSignal()
    }

    renderPage = () => {
        this.setState({
            isLoading: false
        })
    }

    scrollToTop = () => window.scrollTo(0, 0);

    initOneSignal = param => {
        var SDK = document.createElement("script");
        SDK.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
        var script = document.createElement("script");
        script.text = "var OneSignal = window.OneSignal || [];\r\n  OneSignal.push(function() {\r\n    OneSignal.init({\r\n      appId: \"b80e7963-2d68-4e15-ad8d-c79702ee21e6\",\r\n    });\r\n  });";
        
        if(param = "mount") {
            document.head.appendChild(SDK);
            document.head.appendChild(script);
            return
        }
        else {
            document.head.removeChild(SDK);
            document.head.removeChild(script);
            return
        }
    }

    render() {
    let { isLoading } = this.state
        
    if(isLoading) {
        return ( <Spinner /> ) 
    }
    return (
        <>

            <PagesHeader
                pageTitle="Notifiche"
                onClick={() => this.props.history.goBack() } 
            />

            <div className="not__body">
                <h1 className="not--mb">Notifiche</h1>

                <div className="onesignal-customlink-container"></div>
            
            </div>
            <div className="not__footer">
                <div className="not--pl">

                    <Link to="/privacypolicy">
                        <p>Privacy Policy</p>
                    </Link>
                
                </div>
                <p className="not--pr">
                    <a href="https://github.com/emanueledancelli" target="_blank" rel="noopener noreferrer">ED</a>
                </p>
            </div>

        </>            
    )
    }
}

export default Notifications;