import React from 'react';
import { Link } from 'react-router-dom';


const SideMenu = props => {
    const menuStyles = {
        container: {
            //minHeight: '78vh',
            width:'50%',
            position: 'absolute',
            top: '12vh',
            marginLeft: '5px',
            left: '0',
            overflow: 'hidden',
            zIndex: '1000',
            //backgroundColor: 'rgba(255, 255, 255, 0.8)',
            //display: 'flex',
        },
        items: {
            padding: '5%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            border: '1px solid black',
            justifyContent: 'flex-center',
            borderRadius: '10px',
            WebkitBoxShadow: '3px 4px 20px -4px rgba(0,0,0,0.8)',
            MozBoxShadow: '3px 4px 20px -4px rgba(0,0,0,0.8)',
            boxShadow: '3px 4px 20px -4px rgba(0,0,0,0.8)',
        },
        item: {
            fontSize: '1em',
            paddingTop: '1em',
            paddingBottom: '1em'
        }
    }

    return (
        <div style={menuStyles.container}>
            <div style={menuStyles.items}>
                <Link 
                    to='/suggerisci'
                    style={menuStyles.item}
                >
                    <span>Suggerisci un evento</span>
                </Link>
                <Link to='/feedback' style={menuStyles.item}>                
                    <span>Feedback</span>                
                </Link>
                <Link to='/contatti' style={menuStyles.item}>                
                    <span>Contatti</span>                
                </Link>
                <Link to='/about' style={menuStyles.item}>
                    <span>About</span>
                </Link>
                <Link to='/privacy'  style={menuStyles.item}>
                    <span>Privacy</span>
                </Link>
            </div>
        </div>
    )
}

export default SideMenu;