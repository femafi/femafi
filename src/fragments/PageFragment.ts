import { graphql } from 'gatsby';
import { PrismicDocumentBase, PrismicKeyText } from '../prismic';
import { HeadingAndTextSlice } from '../slices/HeadingAndText';
import { WallsIOSlice } from '../slices/WallsIO';

export type PageSlice = HeadingAndTextSlice | WallsIOSlice;

export interface PageDocument extends PrismicDocumentBase {
  title: PrismicKeyText;
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
    body {
      __typename
      ... on PRISMIC_PageBodyHeading_and_text {
        type
        primary {
          heading
          text
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
