import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export const Seo = ({ title, description, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={
          image ||
          `https://api.alture.org/wp-content/uploads/2019/03/53279007_2194473433965149_7634333943784800256_n.jpg`
        }
      />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
