import React from "react";
import posed from "react-pose";
import { Seo, ScrollToTop, Header, Hero } from "components/common";

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

export const Feedback = () => {
  return (
    <Animated>
      <ScrollToTop />
      <Seo />
      <Header close />
      <Hero close hasBorder title="Feedback" />
    </Animated>
  );
};
