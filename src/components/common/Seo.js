import React from 'react';
import { Helmet } from 'react-helmet';

export const Seo = ({ title, description, url, image }) => {
    return (

        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}  />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
        </Helmet>
    
    )
};
