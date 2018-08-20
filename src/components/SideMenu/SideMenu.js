import React from 'react';

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
            padding: '3%',
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
            paddingTop: '0.5em',
            paddingBottom: '0.5em'
        }
    }

    return (
        <div style={menuStyles.container}>
            <div style={menuStyles.items}>
                <span style={menuStyles.item}>Suggerisci un evento</span>
                <span style={menuStyles.item}>Contatti</span>
                <span style={menuStyles.item}>About</span>
                <span style={menuStyles.item}>Privacy</span>
            </div>
        </div>
    )
}

export default SideMenu;