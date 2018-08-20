import React from 'react';

const ImgOverlay = props => {
    return (
        <div style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://api.dancel.li${props.image}) center` }}>
            {props.children}
        </div>
    );
} 
  

export default ImgOverlay;