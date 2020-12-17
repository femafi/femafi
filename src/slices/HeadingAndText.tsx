import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled from 'styled-components';
import { PrismicDocumentBase, PrismicSlice, PrismicKeyText, PrismicRichText } from '../prismic';

const Heading = styled.h2`
`;

const Text = styled.div`
`;

interface HeadingAndTextNonRepeatable {
  heading: PrismicKeyText;
  text: PrismicRichText;
}

export type HeadingAndTextSlice = PrismicSlice<HeadingAndTextNonRepeatable, null, 'headinge_and_text'>;

const HeadingAndText: React.FunctionComponent<HeadingAndTextNonRepeatable> = (props) => {
  const { heading, text } = props;

  if (!heading) {
    throw new Error('No heading');
  }

  if (!text) {
    throw new Error('No text');
  }

  return (
    <>
      <Heading>{heading}</Heading>
      <Text>{RichText.render(text)}</Text>
    </>
  )
};

export default HeadingAndText;
