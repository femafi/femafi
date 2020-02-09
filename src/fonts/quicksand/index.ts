// tslint:disable:no-var-requires
import { css } from 'styled-components';

const FONT_FAMILY = 'Quicksand';

export default css`
  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./QuicksandBook-Regular.woff2')}') format('woff2'),
      url('${require('./QuicksandBook-Regular.woff')}') format('woff'),
      url('${require('./QuicksandBook-Regular.otf')}') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./QuicksandBookOblique-Regular.woff2')}') format('woff2'),
      url('${require('./QuicksandBookOblique-Regular.woff')}') format('woff'),
      url('${require('./QuicksandBookOblique-Regular.otf')}') format('opentype');
    font-weight: normal;
    font-style: oblique;
  }

  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./QuicksandBold-Regular.woff2')}') format('woff2'),
      url('${require('./QuicksandBold-Regular.woff')}') format('woff'),
      url('${require('./QuicksandBold-Regular.otf')}') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./QuicksandBoldOblique-Regular.woff2')}') format('woff2'),
      url('${require('./QuicksandBoldOblique-Regular.woff')}') format('woff'),
      url('${require('./QuicksandBoldOblique-Regular.otf')}') format('opentype');
    font-weight: bold;
    font-style: oblique;
  }

  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./QuicksandLight-Regular.woff2')}') format('woff2'),
      url('${require('./QuicksandLight-Regular.woff')}') format('woff'),
      url('${require('./QuicksandLight-Regular.otf')}') format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./QuicksandLightOblique-Regular.woff2')}') format('woff2'),
      url('${require('./QuicksandLightOblique-Regular.woff')}') format('woff'),
      url('${require('./QuicksandLightOblique-Regular.otf')}') format('opentype');
    font-weight: 300;
    font-style: oblique;
  }

  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./QuicksandDash-Regular.woff2')}') format('woff2'),
      url('${require('./QuicksandDash-Regular.woff')}') format('woff'),
      url('${require('./QuicksandDash-Regular.otf')}') format('opentype');
    font-weight: 200;
    font-style: normal;
  }
`;
