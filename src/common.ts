// Stateless react components wrapped with GraphQL queries
// https://github.com/birkir/gatsby-source-prismic-graphql#assign-graphql-query-to-component
import React from 'react';

export interface QueryComponent<Props> extends React.FunctionComponent<Props> {
  query: void;
  fragments?: void[];
}
