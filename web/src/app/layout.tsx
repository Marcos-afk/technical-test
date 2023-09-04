import { StyledComponentsProvider } from '@libs/styled-components/Provider';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import StyledComponentsRegistry from './registry';

const roboto = Roboto({ weight: ['500', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flow',
  description: 'This is a Next.js application of an e-commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <StyledComponentsProvider>{children}</StyledComponentsProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
