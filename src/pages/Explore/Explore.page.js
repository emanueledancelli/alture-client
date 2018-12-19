import React from "react";
import { Seo, Header, Hero, ScrollToTop } from "components/common";
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
    </Animated>
  );
};
