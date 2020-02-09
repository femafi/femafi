// tslint:disable:no-var-requires
import { css } from 'styled-components';

const FONT_FAMILY = 'MotorBlock';

export default css`
  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./MotorBlock.woff2')}') format('woff2'),
      url('${require('./MotorBlock.woff')}') format('woff'),
      url('${require('./MotorBlock.ttf')}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
