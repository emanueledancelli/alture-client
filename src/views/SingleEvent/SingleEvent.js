import React, { Component } from 'react';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount/ScrollToTopOnMount'
import ImgOverlay from '../../components/ImgOverlay/ImgOverlay'
import SingleHeader from '../../components/singleHeader/singleHeader'
import PlaceAndDate from '../../components/PlaceAndDate/PlaceAndDate'
import EventMap from '../../components/EventMap/EventMap'
import Spinner from '../../components/Spinner/Spinner'
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/it';

class SingleEvent extends Component {
    state = {
        isLoading: false,
        isDescriptionExtended: false,
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
                marginBottom: '8vh'
            },
            curvedContainer: {
                backgroundColor: 'white',
                padding: '5%',
                marginTop: '20px'
            },
            descriptionContainer: {
                paddingTop: '5%',
                paddingRight: '5%',
                paddingLeft: '5%',
            },
            info: {
                marginTop: '25px',
                marginBottom: '15px'
            },
            map: {
                height: '200px',
                width: '100%',
                backgroundColor: 'darkgreen',
                marginBottom: '20px'
            },
            description: {
                fontSize: '1em',
                lineHeight: '180%',
            }
        }
        
        const { selectedEvent, isLoading } = this.state
        const date = moment(selectedEvent.start).locale('it').format("LLL");
        const currentUrl = 'https://sleepy-visvesvaraya-3e74ed.netlify.com' + this.props.location.pathname
        
        if(isLoading) {
            return <Spinner/>
        }
        return (
            <div style={styles.wrapper}>
                <ScrollToTopOnMount/>
                <ImgOverlay image={selectedEvent.image.url}>                
                    <SingleHeader
                        url={currentUrl}
                        backButtonHandler={() => this.props.history.goBack()}
                        />
                </ImgOverlay>
                <div style={styles.curvedContainer}>
                    <div style={styles.headerContainer}>
                        <h1 className="title black">{selectedEvent.name}</h1>
                        <div style={styles.info}>
                            <PlaceAndDate location={selectedEvent.place} date={date} />
                        </div>
                    </div>
                </div>
                <div style={{zIndex: '-1'}}>
                    <EventMap />                
                </div>
                <div style={styles.descriptionContainer}>
                    <p style={styles.description}>{selectedEvent.description}</p>
                </div>
            </div>
        );
    
    }
}

export default SingleEvent;