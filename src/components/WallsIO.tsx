import React from 'react';
import styled from 'styled-components';
import useRect from '../hooks/useRect';
import useWindowDimensions from '../hooks/useWindowDimensions';

const SocialMediaWall = styled.iframe<{ height: number }>`
  width: 100%;
  height: ${props => props.height}px;
  border: 1px solid red;
`;

interface WallsIOProps {
  src: string;
}

const WallsIO = React.forwardRef<HTMLDivElement, WallsIOProps>((props, ref) => {
  if (!ref || !('current' in ref)) {
    return null;
  }

  const { src } = props;
  const { height } = useWindowDimensions();
  const { top } = useRect(ref);
  const iframeHeight = Math.floor(height - top - 32);

  return (
    <div ref={ref}>
      <SocialMediaWall height={iframeHeight} src={src} />
    </div>
  );
});

export default WallsIO;
