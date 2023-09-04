import { NavBar } from '@components/NavBar';
import { CartProvider } from '@contexts/cart';
import { StyledComponentsProvider } from '@libs/styled-components/Provider';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import StyledComponentsRegistry from './registry';

const inter = Inter({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

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
    <CartProvider>
      <html lang="pt-BR">
        <body className={`${inter.className} ${poppins.className}`}>
          <StyledComponentsRegistry>
            <StyledComponentsProvider>
              <NavBar />
              {children}
            </StyledComponentsProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </CartProvider>
  );
}
