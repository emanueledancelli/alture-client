import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { ArrowCollapseIcon } from 'mdi-react';
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/it';

import SingleHeader from '../../components/singleHeader/singleHeader';
import PlaceAndDate from '../../components/PlaceAndDate/PlaceAndDate';
import EventMap from '../../components/EventMap/EventMap';
import Spinner from '../../components/Spinner/Spinner';

class SingleEvent extends Component {
    state = {
        isLoading: false,
        isDescriptionExtended: false,
        selectedEvent: {
            image: '',
            name: '',
            description: '',
        },    
    }

    componentDidMount() {
        console.log(this.props.history)
        this.setState({ isLoading: true })

        axios.get('https://api.dancel.li/event/' + this.props.match.params.id)
            .then(res => {
                this.setState({ selectedEvent: res.data, isLoading: false })
                console.log(this.state.selectedEvent)
            })
            .catch(err => console.log(err))
    }

    handleFullDescriptionButton = () => {
        this.setState({
            isDescriptionExtended: !this.state.isDescriptionExtended
        })
    }

    sliceName = () => {
        if(this.state.selectedEvent.name.length < 25) {
            return this.state.selectedEvent.name
        }
        else {
            return this.state.selectedEvent.name.slice(0, 21) + '...'
        }
    }

    sliceDescription = () => {
        return this.state.selectedEvent.description.slice(0, 200) + '...'
    }

    render() {

        const Container = styled('div')`
            width: 100%;
            position: absolute;
            background-color: white;
            top: 0;
            left: 0;
            margin-top: 14vh;
            margin-bottom: 10vh;
        `     
        const MainInfo = styled('div')`
            background-color: white;
            padding: 5%;
            margin-top: 20px  
        `
        const InfoBox = styled('div')`
            margin-top: 25px;
            margin-bottom: 15px;
        `
        const Description = css`
            padding-top: 5%;
            padding-right: 5%;
            padding-left: 5%;
        `
        const descriptionText = css`
            font-size: 1em;
            line-height: 180%;
        `
        const { selectedEvent, isLoading, isDescriptionExtended } = this.state
        const date = moment(selectedEvent.start).locale('it').format("LLL");
        const currentUrl = 'https://sleepy-visvesvaraya-3e74ed.netlify.com' + this.props.location.pathname
        const slicedName = this.sliceName()
        const slicedDescription = this.sliceDescription()

        if(isLoading) {
            return <Spinner/>
        }
        return (
            <Container>
                <SingleHeader
                    url={currentUrl}
                    name={slicedName}
                    image={selectedEvent.image.url}
                    onClick={() => this.props.history.goBack()}
                />
                <MainInfo>
                    <h1 className="title black">{selectedEvent.name}</h1>
                    <InfoBox>
                        <PlaceAndDate location={selectedEvent.place} date={date} />
                    </InfoBox>
                </MainInfo>    
                <EventMap />                
                <div className={ Description }>
                    {isDescriptionExtended
                        ? <p className={ descriptionText }>{selectedEvent.description}</p>
                        : <p className={ descriptionText }>{ slicedDescription }</p>
                    }
                    <div onClick={this.handleFullDescriptionButton}>
                        {isDescriptionExtended
                            ? <span><ArrowCollapseIcon size={26}></ArrowCollapseIcon>Visualizza meno</span>
                            : <span>Visualizza descrizione completa</span>
                        }
                    </div>   
                </div>
             
            </Container>
        );
    
    }
}

export default SingleEvent;