import path from 'path';
import { oc } from 'ts-optchain';
import { PrismicNode, PrismicDocumentBase } from '../prismic';
import { PageDocument, PageFragment } from '../fragments/PageFragment';
import linkResolver from './linkResolver';

interface PageInput {
  path: string;
  component: string;
  layout?: string;
  context?: any;
}

interface BoundActionCreators {
  createPage: (page: PageInput) => Promise<void>;
  deletePage: (page: PageInput) => Promise<void>;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
}

type GraphQL = (query: string, options?: any) => Promise<any>;

type GatsbyCreatePages = (fns: { graphql: GraphQL, boundActionCreators: BoundActionCreators }) => void;

interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

interface QueryData {
  data: {
    prismic: {
      allPages: {
        pageInfo: PageInfo;
        edges: PrismicNode<PageDocument>[];
      };
    };
  };
}

const query = `
  query allPages($first: Int = 20, $last: Int, $after: String, $before: String) {
    prismic {
      allPages(first: $first, last: $last, after: $after, before: $before) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            _meta {
              uid
              type
              tags
            }
            title
          }
        }
      }
    }
  }
`;

const createPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  let hasNextPage: boolean | undefined = true;
  let endCursor = null;
  while (hasNextPage) {
    const response: QueryData = await graphql(query, { after: endCursor });
    const edges = oc(response).data.prismic.allPages.edges();
    endCursor = oc(response).data.prismic.allPages.pageInfo.endCursor();
    hasNextPage = oc(response).data.prismic.allPages.pageInfo.hasNextPage();

    if (!edges) {
        throw new Error(`Edges are missing from graphql query`);
    }

    await Promise.all(edges.map(async edge => {
      const node = oc(edge).node();
      const uid = oc(node)._meta.uid();
      await createPage({
        path: linkResolver(node),
        component: path.resolve('src/templates/Page.tsx'),
        context: { uid }
      })
    }));
  }
}

module.exports = createPages;
