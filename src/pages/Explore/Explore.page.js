import React from "react";
import { Seo, Header, Hero, ScrollToTop } from "components/common";
import "./Explore.page.scss";
import posed from "react-pose";

const Animated = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { ease: "easeOut", duration: 400 }
    }
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      y: { ease: "easeOut", duration: 400 }
    }
  }
});

export const Explore = () => {
  return (
    <Animated>
      <ScrollToTop />
      <Seo />
      <Header close />
      <Hero close hasBorder title="Esplorando i confini" />
      <p className="explore">
        Lo spirito dell"esploratore è dentro ciascuno di noi. L"uomo nasce
        esploratore, il desiderio di scoprire cosa si cela oltre il cancello o
        dall"altro lato della montagna è una sua tensione naturale. E,
        nell"immaginario collettivo, l"idea stessa di ricercare luoghi selvaggi
        e sconosciuti, di spingersi al di fuori della zona di comfort porta
        subito la mente su una cresta sottile, che sale verso il cielo. La
        montagna offre ancora molto spazio all"immaginario dell"esplorazione
        proprio perchè non tutta la sua superficie sembra occupata, e andare
        verso l"alto diviene quasi metafora dell"anticonformismo, della volontà
        di non omologarsi: quello di salire è infatti un gesto che sfida la più
        basica e potente delle leggi naturali, la gravità, e la presenza stessa
        delle montagne, in fondo, pare una ribellione alla linearità della
        pianura. Ma la montagna ci parla anche di cose semplici, della terra,
        dell"acqua, del sole, dell"aria, del nostro essere quegli stessi
        elementi di cui è composta la natura. Ed ecco che l"esplorazione verso
        l"altro prosegue, in parallelo, dentro ognuno di noi, alla ricerca di
        quello che siamo e di quello che sentiamo che ci manca. Perchè
        esplorare, in fondo, significa sognare di scoprire ciò che possiamo solo
        immaginare.
      </p>
    </Animated>
  );
};
