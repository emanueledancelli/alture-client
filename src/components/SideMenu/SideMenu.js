import React from 'react';
import './SideMenu.css';

const SideMenu = props => {
    return (
        <div className="sidemenu-wrapper">
            <div className="sidemenu-items">
                <p>Suggerisci un evento</p>
                <p>Contatti</p>
                <p>About</p>
                <p>Privacy</p>
            </div>
        </div>
    )
}

export default SideMenu;