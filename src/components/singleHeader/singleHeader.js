import React, { Component } from 'react';
import './singleHeader.css';

import { KeyboardBackspaceIcon, ShareIcon } from 'mdi-react';

class SingleHeader extends Component {

  render() {
    return (
      <div className="single-header">
        <div onClick={this.props.handleBackButton}>
            <KeyboardBackspaceIcon className="single-header-icon" size={35}/>
        </div>
        <div>
        </div>
        <div>
            <ShareIcon className="single-header-icon" size={35} />
        </div>
      </div>
    );
  }
}

export default SingleHeader;
