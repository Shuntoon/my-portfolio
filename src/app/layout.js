import { Roboto } from 'next/font/google';
import Providers from './providers';
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
