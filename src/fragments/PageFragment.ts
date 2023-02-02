import { graphql } from 'gatsby';
import { PrismicDocumentBase, PrismicKeyText, PrismicImage } from '../prismic';
import { HeadingWithTextAndImageSlice } from '../slices/HeadingWithTextAndImage';
import { WallsIOSlice } from '../slices/WallsIO';

export type PageSlice = HeadingWithTextAndImageSlice | WallsIOSlice;

export interface PageDocument extends PrismicDocumentBase {
  title: PrismicKeyText;
  description?: PrismicKeyText;
  image?: PrismicImage;
  body: PageSlice[];
}

export const PageFragment = graphql`
  fragment PageFragment on PRISMIC_Page {
    _linkType
    __typename
    _meta {
      tags
      type
      uid
    }
    title
    description
    image
    body {
      __typename
      ... on PRISMIC_PageBodyHeading_with_text_and_image {
        type
        primary {
          heading
          text
          image1
        }
      }
      ... on PRISMIC_PageBodyWallsio {
        type
        primary {
          src {
            ... on PRISMIC__FileLink {
              url
              name
              _linkType
            }
            ... on PRISMIC__ExternalLink {
              url
              _linkType
            }
            ... on PRISMIC_Page {
              _linkType
              __typename
              _meta {
                tags
                type
                uid
              }
            }
          }
        }
      }
    }
  }
`;
