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
    color: ${({ theme }) => theme.colors.gray900};
  }

  body, input, textarea, button {
    font-family: 'Roboto';
    font-weight: 500,
  }

  @media (max-width: 768px) {
    html {
      font-size: '87.5%',
    }

  }`;
