import React, {Component} from 'react';
import styled from "react-emotion";
import { Link } from "react-router-dom";
import InfoHeader from '../../components/PagesHeader';

class Info extends Component {
    
    componentDidMount () {
        this.scrollToTop()
    }

    scrollToTop = () => window.scrollTo(0, 0);

    render() {
 
    const Body = styled("div")`
        margin-top: 14vh;
        flex: 1;
        padding: 5%;
        @media (min-width: 740px) {
            padding: 0%;
          }
    `
    const Footer = styled("div")`
        display: flex;
        flex-direction: row;
        padding-right: 5%;
        padding-left: 5%;
        justify-content: space-between;
        align-items: center;
        color: #828282;
        border-top: 1px solid rgba(0,0,0,0.2);
        font-size: 0.8em;
        & a {
            color: #828282;
        }
        @media (min-width: 740px) {
            padding: 0%;
          }
    `

    const Text = styled("p")`
        font-size: 1em;
        line-height: 180%;
        color: #333;
        margin-bottom: 0;
        margin-top: 20px;
    `
    const ContactLinks = styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5%;
        margin-bottom: 8%;
        & p {
            color: #333;
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
        & a {
            color: #333;
        }

    `

    return (
        <React.Fragment>
            <InfoHeader
                pageTitle="Alture"
                onClick={() => this.props.history.goBack() } 
            />
            <Body>
            <h1>Alture</h1>
            <Text> 
                Lo spirito dell'esploratore è dentro ciascuno di noi. 
                L'uomo nasce esploratore, il desiderio di scoprire cosa si cela oltre il cancello o dall'altro lato 
                della montagna è una sua tensione naturale. 
                E, nell'immaginario collettivo, l'idea stessa di ricercare luoghi selvaggi e sconosciuti, di spingersi 
                al di fuori della zona di comfort porta subito la mente su una cresta sottile, che sale verso il cielo. 
                La montagna offre ancora molto spazio all'immaginario dell'esplorazione proprio perchè 
                non tutta la sua superficie sembra occupata, e andare verso l'alto diviene quasi metafora dell'anticonformismo, 
                della volontà di non omologarsi: quello di salire è infatti un gesto che sfida la più basica e potente 
                delle leggi naturali, la gravità, e la presenza stessa delle montagne, in fondo, pare una ribellione alla 
                linearità della pianura. Ma la montagna ci parla anche di cose semplici, della terra, dell'acqua, 
                del sole, dell'aria, del nostro essere quegli stessi elementi di cui è composta la natura. 
                Ed ecco che l'esplorazione verso l'altro prosegue, in parallelo, dentro ognuno di noi, alla ricerca 
                di quello che siamo e di quello che sentiamo che ci manca. Perchè esplorare, in fondo, significa sognare 
                di scoprire ciò che possiamo solo immaginare.
            </Text>
            <ContactLinks>
                <h3>Contatti</h3>
                <p><a href="mailto:info@associazioneilcapannone.org">Mail</a></p>            
                <p><a href="https://www.instagram.com/a.alture/" target="_blank" rel="noopener noreferrer">Instagram</a></p> 
                <p><a href="https://www.facebook.com/A.Alture/" target="_blank" rel="noopener noreferrer">Facebook</a></p> 
            </ContactLinks>
            </Body>
            <Footer>
                <Link to="/privacypolicy">
                <p>Privacy Policy</p>

                </Link>
                <p><a href="https://github.com/emanueledancelli" target="_blank" rel="noopener noreferrer">ED</a></p>
            </Footer>
        </React.Fragment>            
    )
    }
}

export default Info;