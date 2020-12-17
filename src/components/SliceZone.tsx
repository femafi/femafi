import React from 'react';
import { PrismicSlice } from '../prismic';
import HeadingAndText from '../slices/HeadingAndText';
import WallsIO from '../slices/WallsIO';

interface SliceZoneProps {
  slices?: PrismicSlice<any>[];
}

export default class SliceZone extends React.Component<SliceZoneProps> {
  public renderSlice = (slice: PrismicSlice<any>, index: number) => {
    const { type, primary } = slice;
    const key = `slice-${type}-${index}`;
    switch (type) {
      case 'heading_and_text': {
        return <HeadingAndText key={key} {...primary} />;
        break;
      }
      case 'wallsio': {
        const ref = React.createRef<HTMLDivElement>();
        return <WallsIO ref={ref} key={key} {...primary} />;
        break;
      }
      default:
        throw new Error(`Cannot handle slice type: "${type}"`);
    }
  }

  public render() {
    const { slices } = this.props;

    if (!slices) {
      return null;
    }

    return (
      <React.Fragment>
        {slices.map(this.renderSlice)}
      </React.Fragment>
    );
  }
}
