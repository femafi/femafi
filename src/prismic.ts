export type PrismicLinkType = 'Link.web' | 'Link.file' | 'link.document';

interface PrismicMeta {
    id?: string;
    uid?: string;
    tags?: string[];
    type?: string;
}

export interface PrismicDocumentBase {
    _meta?: PrismicMeta;
    _linkType?: PrismicLinkType;
    __typename?: string;
    url?: string;
}

export interface PrismicDocumentByUid<T> {
    prismic: T | null;
}

export interface PrismicNode<T> {
    node: T | null;
}

export type PrismicFields<T> = T[] | null

export interface PrismicSlice<P = any, F = any, T = string> {
    __typename?: string;
    id?: string;
    fields?: PrismicFields<F>; // "Repeatable zone" in Prismic slice
    primary?: P; // "Non-repeatable zone" in Prismic slice
    type?: T;
}

export type PrismicRichText = any[];

export type PrismicKeyText = string;

export interface PrismicFileLink {
  name: string;
  url: string;
  _linkType: 'Link.file';
  __typename: string;
}

export interface PrismicWebLink {
  url: string;
  target: string;
  _linkType: 'Link.web';
  __typename: string;
}

