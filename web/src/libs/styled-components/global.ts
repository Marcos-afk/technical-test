import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box';
  }

  body {
    -webkit-font-smoothing: 'antialiased';
    background-Color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  body, input, textarea, button {
    font-family: 'Inter' sans-serif;
    font-weight: 400,
  }

  @media (max-width: 768px) {
    html {
      font-size: '87.5%',
    }

  }`;
