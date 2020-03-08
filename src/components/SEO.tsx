import React from 'react';
import { Helmet } from 'react-helmet';
import { oc } from 'ts-optchain';
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
    }
  }
}

const SEO: React.FunctionComponent<SEOProps & SEOQuery> = props => {
  const defaultTitle = oc(props).data.siteMetadata.title();
  const defaultDescription = oc(props).data.siteMetadata.description();
  const siteUrl = oc(props).data.siteMetadata.url();
  const pathname = oc(props).pathname();

  const title = oc(props).title(defaultTitle);
  const description = oc(props).description(defaultDescription);
  const url = `${siteUrl}${pathname || '/'}`;
  const image = oc(props).image.url(defaultImage);

  return (
    <>
      <Helmet title={title}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />}
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