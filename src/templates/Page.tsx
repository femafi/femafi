import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import styled from 'styled-components';
import { Theme } from '../theme';
import Layout from '../components/Layout';
import { PrismicDocumentByUid } from '../prismic';
import { PageDocument, PageFragment } from '../fragments/PageFragment';
import { QueryComponent } from '../common';
import SliceZone from '../components/SliceZone';

const Wrapper = styled.div<{ theme: Theme }>`
  padding: 1rem;
`;

const Title = styled.h1<{ theme: Theme }>`
  display: inline-block;
  color: $white;
  text-shadow: 1px 1px 2px ${props => props.theme.colors.shadow};
  font-weight: 300;
  background-color: ${props => props.theme.colors.mainLight};
  border-radius: 0.5rem;
  font-size: 1.5rem;
  margin: 0;
  padding: 0.5rem 2rem;
`;

export const query = graphql`
  query PageQuery($uid: String!) {
    prismic {
      page(uid: $uid, lang: "en-gb") {
        ...PageFragment
      }
    }
  }
`;

interface PageProps {
  data: PrismicDocumentByUid<{ page: PageDocument }>,
  pageContext?: {
    wallsIo?: string;
  }
}

const Page: QueryComponent<PageProps> = props => {
  const page = oc(props).data.prismic.page();
  const title = oc(page).title();
  const slices = oc(page).body();

  return (
    <Layout>
      <Wrapper>
        <Title>{title}</Title>
        <SliceZone slices={slices} />
      </Wrapper>
    </Layout>
  );
};

Page.query = query;
Page.fragments = [PageFragment];

export default Page;
