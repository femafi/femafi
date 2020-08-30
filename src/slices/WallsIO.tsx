import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';
import { PrismicDocumentBase, PrismicSlice, PrismicKeyText, PrismicRichText, PrismicWebLink } from '../prismic';

interface WallsIONonRepeatable {
  src: PrismicWebLink;
}

export type WallsIOSlice = PrismicSlice<WallsIONonRepeatable, null, 'wallsio'>;

const IFrame = styled.iframe<{ height: number }>`
  width: 100%;
  height: ${props => props.height}px;
  border: 1px solid red;
`;

const WallsIO: React.FC<WallsIONonRepeatable> = (props) => {
  const { src } = props;
  const [top, setTop] = useState(0);
  const ref = createRef<HTMLDivElement>();
  const [width, height] = useWindowSize();


  if (src._linkType !== 'Link.web') {
    throw new Error('Walls.io link must be external link');
  }

  useEffect(() => {
    if (ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setTop(rect.top);
    }
  }, [height, ref, setTop, width]);

  return (
    <div ref={ref}>
      <IFrame height={Math.floor(height - top - 32)} src={src.url} />
    </div>
  );
};

export default WallsIO;
