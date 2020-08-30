import React from 'react';
import { PrismicSlice } from '../prismic';
import HeadingAndText from '../slices/HeadingAndText';
import WallsIO from '../slices/WallsIO';

interface SliceZoneProps {
  slices?: PrismicSlice<any>[];
}

const SliceZone: React.FC<SliceZoneProps> = ({ slices }) => (
  <>
    {slices?.map((slice: PrismicSlice<any>, index: number) => {
      const { type, primary } = slice;
      const key = `slice-${type}-${index}`;
      switch (type) {
        case 'heading_and_text': {
          return <HeadingAndText key={key} {...primary} />;
          break;
        }
        case 'wallsio': {
          return <WallsIO key={key} {...primary} />;
          break;
        }
        default:
          throw new Error(`Cannot handle slice type: "${type}"`);
      }
    })}
  </>
);

export default SliceZone;
