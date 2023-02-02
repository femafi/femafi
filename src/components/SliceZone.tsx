import React from 'react';
import { PrismicSlice } from '../prismic';
import HeadingWithTextAndImage from '../slices/HeadingWithTextAndImage';
import WallsIO from '../slices/WallsIO';

interface SliceZoneProps {
  slices?: PrismicSlice<any>[];
}

export default class SliceZone extends React.Component<SliceZoneProps> {
  public renderSlice = (
    slice: PrismicSlice<any>,
    index: number
  ): JSX.Element => {
    const { type, primary } = slice;
    const key = `slice-${type}-${index}`;
    switch (type) {
      case 'heading_with_text_and_image': {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <HeadingWithTextAndImage key={key} {...primary} />;
      }
      case 'wallsio': {
        const ref = React.createRef<HTMLDivElement>();
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <WallsIO ref={ref} key={key} {...primary} />;
      }
      default:
        throw new Error(`Cannot handle slice type: "${type}"`);
    }
  };

  public render(): JSX.Element {
    const { slices } = this.props;

    if (!slices) {
      return null;
    }

    return <>{slices.map(this.renderSlice)}</>;
  }
}
