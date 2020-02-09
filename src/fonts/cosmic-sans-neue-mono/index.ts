// tslint:disable:no-var-requires
import { css } from 'styled-components';

const FONT_FAMILY = 'CosmicSansNeueMono';

export default css`
  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./CosmicSansNeueMono.woff2')}') format('woff2'),
      url('${require('./CosmicSansNeueMono.woff')}') format('woff'),
      url('${require('./CosmicSansNeueMono.otf')}') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONT_FAMILY};
    src: url('${require('./CosmicSansNeueMonoBold.woff2')}') format('woff2'),
      url('${require('./CosmicSansNeueMonoBold.woff')}') format('woff'),
      url('${require('./CosmicSansNeueMonoBold.otf')}') format('opentype');
    font-weight: bold;
    font-style: normal;
  }
`;
