import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import { colors, themes } from 'utils';
import { ThemeModeProvider } from 'providers/ThemeModeProvider';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
`;

const IphoneMockup = styled.div`
  display: block;
  box-sizing: content-box;
  width: 23rem;
  height: 49rem;
  border: 0.85rem solid #192333;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 3rem 0.5rem rgba(0, 0, 0, 0.2),
    0 1rem 1.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MainTemplate = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tulski</title>
      <meta name="description" content="Nested component"></meta>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeModeProvider>
      {([themeMode]) => (
        <ThemeProvider theme={{ ...colors, ...themes[themeMode] }}>
          <GlobalStyle />
          <Wrapper>
            <IphoneMockup>{children}</IphoneMockup>
          </Wrapper>
        </ThemeProvider>
      )}
    </ThemeModeProvider>
  </>
);

export default MainTemplate;
