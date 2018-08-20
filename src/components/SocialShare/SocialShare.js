import React from 'react';
import { FacebookShareButton, 
         WhatsappShareButton,
         TelegramShareButton,
         EmailShareButton,
        
         FacebookIcon,
         WhatsappIcon,
         TelegramIcon,
         EmailIcon,
        } from 'react-share';

const SocialShare = (props) => {
    const shareStyle = {
        container: {
            height: '100vh',
            //width: '15vh',
            position: 'fixed',
            top: '0',
            right: '0',
            paddingLeft: '3%',
            paddingRight: '3%',
            zIndex: '9999',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'white',
            WebkitBoxShadow: '-7px 2px 20px -5px rgba(0,0,0,0.75)',
            MozBoxShadow: '-7px 2px 20px -5px rgba(0,0,0,0.75)',
            BoxShadow: '-7px 2px 20px -5px rgba(0,0,0,0.75)',
        },
        text: {
            fontSize: '0.8em',
            marginBottom: '25px',
            marginTop: '10px'
        },
        centered: {
            margin: 0
        },
        wrapper: {
            minHeight: '100%',
            width: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: 'transparent'
        }

    }

    return (
        <div style={shareStyle.wrapper} onClick={props.wrapperHandler}>
            <div style={shareStyle.container}>
                <FacebookShareButton style={shareStyle.centered} url={props.url}>
                    <FacebookIcon
                        size={36}
                        round 
                    />
                    <p style={shareStyle.text}>Facebook</p>
                </FacebookShareButton>
                <WhatsappShareButton url={props.url}>
                    <WhatsappIcon
                        size={36}
                        round 
                    />
                    <p style={shareStyle.text}>WhatsApp</p>
                </WhatsappShareButton>
                <TelegramShareButton url={props.url}>
                    <TelegramIcon
                        size={36}
                        round 
                    />
                    <p style={shareStyle.text}>Telegram</p>
                </TelegramShareButton>
                <EmailShareButton url={props.url}>
                    <EmailIcon
                        size={36}
                        round 
                    />
                    <p style={shareStyle.text}>Email</p>
                </EmailShareButton>
            </div>
        </div>
        
    );
}

export default SocialShare;