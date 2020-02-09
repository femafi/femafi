import { PrismicDocumentBase } from '../prismic';

export default (document: PrismicDocumentBase) => {
    const meta = document._meta;
    if (!meta) {
        throw new Error(`_meta is missing from document`);
    }

    if (meta.uid === 'index') {
      return '/';
    }

    return `/${meta.uid}`;
};
