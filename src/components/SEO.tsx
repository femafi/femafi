import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { PrismicImage } from '../prismic';
import defaultImage from './logo.png';

interface SEOProps {
  title?: string;
  description?: string;
  image?: PrismicImage;
  pathname?: string;
  article?: any;
}

interface SEOQuery {
  data: {
    siteMetadata: {
      title: string;
      description: string;
      url: string;
    };
  };
}

const SEO: React.FunctionComponent<SEOProps & SEOQuery> = (props) => {
  const {
    data,
    description: customDescription,
    image: customImage,
    pathname,
    title: customTitle,
  } = props;

  const { title: defaultTitle, description: defaultDescription, url: siteUrl } =
    data.siteMetadata || {};

  const title = customTitle || defaultTitle;
  const description = customDescription || defaultDescription;
  const image = customImage ? customImage.url : defaultImage;
  const url = `${siteUrl}${pathname || '/'}`;

  return (
    <>
      <Helmet title={title}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
      }
    }
  }
`;

const SEOQueryComponent: React.FunctionComponent<SEOProps> = (props) => (
  <StaticQuery
    query={query}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <SEO data={data} {...props} />}
  />
);

export default SEOQueryComponent;
