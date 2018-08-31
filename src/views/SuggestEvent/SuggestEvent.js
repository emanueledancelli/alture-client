import React, { Component } from 'react';
import styled from 'react-emotion';
import SingleHeader from '../../components/SingleHeader/SingleHeader';


class SuggestEvent extends Component {
    state = {
        isGoing: '',
        numberOfGuests: ''
    }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    render() {

        const Container = styled('div')`
            width: 100%;
            margin-top: 14vh;
        `
        
        return (
            <React.Fragment>
                <SingleHeader name="Suggerisci Evento" />
                <Container>
                    <form>
                        <label>
                            Is going:
                            <input
                                name="isGoing"
                                type="checkbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange} 
                            />
                        </label>
                        <br />
                        <label>
                            Number of guests:
                            <input
                                name="numberOfGuests"
                                type="text"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange} 
                            />
                        </label>
                    </form>    
                </Container>
            </React.Fragment>
        )
    }
}

export default SuggestEvent;
