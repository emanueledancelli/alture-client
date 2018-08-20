import React, { Component } from 'react';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount/ScrollToTopOnMount'
import ImgOverlay from '../../components/ImgOverlay/ImgOverlay'
import SingleHeader from '../../components/singleHeader/singleHeader'
import PlaceAndDate from '../../components/PlaceAndDate/PlaceAndDate'
import EventMap from '../../components/EventMap/EventMap'
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/it';

class SingleEvent extends Component {
    state = {
        isLoading: false,
        selectedEvent: {
            image: ''
        },
        
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        axios.get('https://api.dancel.li/event/' + this.props.match.params.id)
            .then(res => {
                this.setState({ selectedEvent: res.data, isLoading: false })
                console.log(this.state.selectedEvent)
            })
            .catch(err => console.log(err))
    }

    render() {
        
        const styles = {
            wrapper: {
                width: '100%',
                position: 'absolute',
                backgroundColor: 'white',
                top: '0',
                left: '0',
                marginBottom: '80px'
            },
            container: {
                padding: '5%'
            },
            info: {
                marginTop: '20px',
                marginBottom: '20px'
            },
            map: {
                height: '200px',
                width: '100%',
                backgroundColor: 'darkgreen',
                marginBottom: '20px'
            },
            description: {
                fontSize: '18px',
                lineHeight: '150%'
            }
        }
        
        const { selectedEvent, isLoading } = this.state
        const date = moment(selectedEvent.start).locale('it').format("LLL");

        if(isLoading) (
            <p>Caricamento...</p>
        )
        return (
            <div style={styles.wrapper}>
                <ScrollToTopOnMount/>
                <ImgOverlay image={selectedEvent.image.url}>                
                    <SingleHeader handleBackButton={() => this.props.history.goBack()}/>
                </ImgOverlay>
                <div style={styles.container}>
                    <h1 className="title black">{selectedEvent.name}</h1>
                    <div style={styles.info}>
                        <PlaceAndDate location={selectedEvent.place} date={date} />
                    </div>
                </div>
                <EventMap />
                <div style={styles.container}>
                    <span style={styles.description}>{selectedEvent.description}</span>

                </div>
            </div>
        );
    
    }
}

export default SingleEvent;