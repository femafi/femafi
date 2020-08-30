import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

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
    }
  }
}

const SEO: React.FunctionComponent<SEOProps & SEOQuery> = (props) => {
  const siteMetadata = get(props.data, 'siteMetadata');
  const defaultTitle = get(siteMetadata, 'title');
  const defaultDescription = get(siteMetadata, 'description');
  const siteUrl = get(siteMetadata, 'url');

  const {
    description = defaultDescription,
    image = defaultImage,
    pathname,
    title = defaultTitle,
  } = props;

  const url = `${siteUrl}${pathname || '/'}`;

  return (
    <>
      <Helmet title={title || defaultTitle}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  );
}

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

const SEOQueryComponent: React.FunctionComponent<SEOProps> = props => (
  // tslint:disable-next-line:jsx-no-lambda
  <StaticQuery query={query} render={data => <SEO data={data} {...props} />} />
);

export default SEOQueryComponent;