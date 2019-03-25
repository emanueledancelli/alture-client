import React from "react";
import { Seo, Header, Hero, ScrollToTop, Animated } from "components/common";
import "./Edition.page.scss";

const seoTags = {
  title: "Di vento contrario - Alture",
  url: "https://alture.org/esplorando-i-confini",
  description: "Esplorando i confini - Alture"
};

const Edition = () => {
  return (
    <Animated>
      <ScrollToTop />
      <Seo {...seoTags} />
      <Header close />
      <Hero close hasBorder title="Di vento contrario" />
      <p className="explore">
        In montagna é raro che vi sia assoluta assenza di vento. Simbolo della
        natura incontrollabile, il vento può cancellare le distanze e
        trasportare profumi e colori, idee e persone; è l’elemento che spazza il
        cielo, dissolvendo le foschie e pulendo le creste. Ma, al tempo stesso,
        il vento è portatore di freddo, neve e paura: un giro imprevisto del
        vento o l'arrivo di una tempesta hanno cambiato innumerevoli volte il
        corso della storia, rovesciando l'esito di battaglie o cancellando in
        poche ore paesi e foreste. Quando ci si trova soli, circondati dalla sua
        forza indomita, è quindi necessario valutare sapientemente paura, fatica
        e ambizioni in relazione alla propria condizione fisica e mentale. Il
        vento infatti s’infila ovunque, nei corpi, nei pensieri, nelle parole,
        facendo vacillare le certezze e obbligando a un cambiamento di
        prospettiva. Come si affronta la corrente avversa? Cosa si prova quando
        il mutamento di direzione diviene un passaggio necessario per procedere
        oltre? Alla meta si può arrivare da molte direzioni e non sempre ci si
        trova a percorrere la più semplice. A volte addirittura si sceglie la
        più difficile, sfidando la natura e, al tempo stesso, i propri limiti.
        Perché spesso è il percorso, e non la meta, ad essere importante.
      </p>
    </Animated>
  );
};

export default Edition;
