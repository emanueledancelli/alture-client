import React, { Component } from 'react';
import './singleHeader.css';
import SocialShare from '../SocialShare/SocialShare'

import { KeyboardBackspaceIcon, ShareVariantIcon } from 'mdi-react';

class SingleHeader extends Component {
  state = {
    isSharingOpen: false
  }

  shareButtonHandler = () => {
    this.setState({ 
      isSharingOpen: !this.state.isSharingOpen 
    })
  }

  wrapperHandler = () => {
    this.setState({
      isSharingOpen: false
    })
  }

  render() {
    const { isSharingOpen } = this.state

    if(isSharingOpen) {
      return (
        <div>
          <div className="single-header">
                <div onClick={this.props.backButtonHandler}>
                    <KeyboardBackspaceIcon className="single-header-icon" size={35}/>
                </div>
                <div></div>
                <div onClick={this.shareButtonHandler}>
                    <ShareVariantIcon className="single-header-icon" size={35} />
                </div>
                </div>

                <SocialShare 
                  url={this.props.url} 
                  wrapperHandler={this.wrapperHandler}
                />
        </div>
    
      );
    }

    return (
      <div className="single-header">
        <div onClick={this.props.backButtonHandler}>
            <KeyboardBackspaceIcon className="single-header-icon" size={35}/>
        </div>
        <div></div>
        <div onClick={this.shareButtonHandler}>
            <ShareVariantIcon className="single-header-icon" size={35} />
        </div>
      </div>
    );
  }
}

export default SingleHeader;
