export interface Theme {
  colors: {
    text: string;
    background: string;
    mainLight: string;
    mainDark: string;
    accentLight: string;
    accentDark: string;
    shadow: string;
  };
  fontFamilies: {
    text: string;
    logo: string;
    code: string;
  };
  maxWidth: string;
}

const theme: Theme = {
  colors: {
    text: '#ffffff',
    background: '#000000',
    mainLight: 'rgb(130,163,217)',
    mainDark: 'rgb(0,68,193)',
    accentLight: '#a9a9a9',
    accentDark: '#595959',
    shadow: 'rgba(0,0,0,0.75)'
  },
  fontFamilies: {
    text: 'Quicksand, Verdana, Arial, sans-serif',
    logo: 'MotorBlock',
    code: 'CosmicSansNeueMono, monospace'
  },
  maxWidth: '1000px'
};

export default theme;
