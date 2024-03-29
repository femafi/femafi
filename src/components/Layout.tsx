import React from 'react';
import styled, {
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from 'styled-components';
import styledNormalize from 'styled-normalize';
import fonts from '../fonts';
import theme, { Theme } from '../theme';
import { PrismicKeyText, PrismicImage } from '../prismic';
import Logo from '../assets/logo.svg';
import SEO from './SEO';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${fonts}

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    x-ms-format-detection: none;
    font-family: ${theme.fontFamilies.text};
  }

  body {
    padding: 10px 0;
    margin: 0;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
  }

  code, pre {
    font-family: ${theme.fontFamilies.code};
  }

  a {
    color: ${theme.colors.mainLight};
    opacity: 1;
    transition: opacity .25s ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const Center = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const StyledLogo = styled(Logo)<{ theme: Theme }>`
  display: inline-block;
  width: 240px;
  fill: linear-gradient(90deg, blue, red);
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
  margin-top: 2px;
  animation: ${fadeIn} 1.4s ease-in 1;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

interface LayoutProps {
  title?: PrismicKeyText;
  description?: PrismicKeyText;
  image?: PrismicImage;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  title,
  description,
  image,
  children,
}) => (
  <>
    <SEO title={title} description={description} image={image} />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Center>
        <StyledLogo />
      </Center>
      <Center>
        <Title>Finnish Electronic Music Association</Title>
      </Center>
      <ContentWrapper>{children}</ContentWrapper>
    </ThemeProvider>
  </>
);

export default Layout;
