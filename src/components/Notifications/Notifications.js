import React, { Component } from 'react';


const wrapper = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh'
}

const Notifications = (props) => {
    if(this.props.isActive) {
            <div style={wrapper}>
                <p>Notifiche attive</p>
            </div>
    }
        <div style={wrapper}>
                <p>Notifiche disattivate</p>
        </div>
            
}

export default Notifications;