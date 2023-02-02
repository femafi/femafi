import React from 'react';
import styled from 'styled-components';
import useRect from '../hooks/useRect';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { PrismicSlice, PrismicWebLink } from '../prismic';

interface WallsIONonRepeatable {
  src: PrismicWebLink;
}

export type WallsIOSlice = PrismicSlice<WallsIONonRepeatable, null, 'wallsio'>;

const IFrame = styled.iframe<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  border: 1px solid red;
`;

const WallsIO = React.forwardRef<HTMLDivElement, WallsIONonRepeatable>(
  (props, ref) => {
    const { src } = props;

    if (!ref || !('current' in ref)) {
      return null;
    }

    if (src._linkType !== 'Link.web') {
      throw new Error('Walls.io link must be external link');
    }

    const { height } = useWindowDimensions();
    const { top } = useRect(ref);
    const iframeHeight = Math.floor(height - top - 32);

    return (
      <div ref={ref}>
        <IFrame height={iframeHeight} src={src.url} />
      </div>
    );
  }
);

export default WallsIO;
