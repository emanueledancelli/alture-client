import React from 'react';
import styled, { css } from "react-emotion";
import { CloseCircleOutlineIcon } from "mdi-react";

const Info = props => {

    const Header = styled("div")`
        display: flex;
        height: 14vh;
        padding-right: 5%;
        padding-left: 5%;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    `
    const Body = styled("div")`
        flex: 1;
        padding: 5%;

    `
    const Footer = styled("div")`
        display: flex;
        flex-direction: row;
        padding-right: 5%;
        padding-left: 5%;
        justify-content: space-between;
        align-items: center;
    `

    const Text = styled("p")`
        font-size: 1em;
        line-height: 180%;
        color: #333;
        margin-bottom: 0;
        margin-top: 20px;
    `

    return (
        <React.Fragment>
            <Header>
                <CloseCircleOutlineIcon 
                    onClick={() => this.props.history.goBack() } 
                    size={30} 
                />
            </Header>
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
            </Body>
            <Footer>
                <p>Privacy Policy</p>
                <p><a href="https://emanueledancelli.com" target="_blank">ED</a></p>
            </Footer>
        </React.Fragment>            
    )
}

export default Info;