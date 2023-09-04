'use client';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './global';
import { DEFAULT_THEME } from './theme';

export function StyledComponentsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
