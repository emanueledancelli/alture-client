import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { SendIcon } from 'mdi-react';


class Feedback extends Component {
    state = {
        email: 'email',
        feedback: ''
    }

    render() {
        const Container = styled('div')`
            width: 100%;
        `
        const SendButton = styled('div')`
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: lightblue;
        `
        const alignFix = css`
            display: flex;
            align-items: center;
            justify-content: center;
        `
        const iconFix = css`
            margin-left: 10px;
        `
        
        return (
            <React.Fragment>
                <Container>
                    <h1 className="title black">Feedback</h1>
                    <form>
                        <label>
                            email:<br></br>
                            <input
                                name="isGoing"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleInputChange} 
                            />
                        </label>
                        <label>
                            <input
                                name="numberOfGuests"
                                type="text"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange} >
                            </input>
                        </label>
                    </form>
                    <SendButton><span className={ alignFix }>Invia il feedback<SendIcon className={iconFix} size={26} /></span></SendButton> 
                </Container>                
            </React.Fragment>
        );
    }
}

export default Feedback