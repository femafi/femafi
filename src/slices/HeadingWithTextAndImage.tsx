import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled from 'styled-components';
import {
  PrismicImage,
  PrismicSlice,
  PrismicKeyText,
  PrismicRichText,
} from '../prismic';

const Heading = styled.h2``;

const Text = styled.div``;

const Image =styled.img`
  width: 100%;
  height: auto;
`;

interface HeadingWithTextAndImageNonRepeatable {
  heading: PrismicKeyText;
  image1: PrismicImage;
  text: PrismicRichText;
}

export type HeadingWithTextAndImageSlice = PrismicSlice<
  HeadingWithTextAndImageNonRepeatable,
  null,
  'heading_with_text_and_image'
>;

const HeadingAndText: React.FunctionComponent<HeadingWithTextAndImageNonRepeatable> = (
  props
) => {
  const { heading, text, image1 } = props;

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
      {image1 && <Image src={image1.url} alt={image1.alt} />}
    </>
  );
};

export default HeadingAndText;
