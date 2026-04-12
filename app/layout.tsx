import './globals.css';
import './fontawesome';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Meu portfólio pessoal feito com Next.js',
};

import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
