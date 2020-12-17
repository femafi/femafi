import React from 'react';
import { PrismicSlice } from '../prismic';
import HeadingAndText from '../slices/HeadingAndText';
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
      case 'heading_and_text': {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <HeadingAndText key={key} {...primary} />;
        break;
      }
      case 'wallsio': {
        const ref = React.createRef<HTMLDivElement>();
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <WallsIO ref={ref} key={key} {...primary} />;
        break;
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
