import React, { Component } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader'

class About extends Component {
    render() {
      const aboutStyles = {
        container: {
                paddingTop: '5%',
                paddingRight: '5%',
                paddingLeft: '5%',
        },
        text: {
            lineHeight: '150%'
        }
      }

      return (
          <div style={aboutStyles.container}>
              <AppHeader />
              <h1 className="title black">About</h1>
              <p style={aboutStyles.text}>
                Dal 2015, l'Associazione Il Capannone punta ad ampliare i propri orizzonti proponendo la prima edizione di Alture, festival dedicato alla scoperta e alla valorizzazione dell’ambiente naturale che più caratterizza il nostro territorio: la montagna. L’intento che dà origine al tutto è quello di riuscire a costruire, a livello tematico, un equilibrato percorso tra la valenza generale del tema e quella locale; per coniugare le diverse esigenze di approfondimento, si decide di adottare molteplici modalità di approccio, al fine di offrire al pubblico un'analisi trasversale e poliedrica della tematica. 
              </p>
          </div>
      );
    }
  }
  

export default About;