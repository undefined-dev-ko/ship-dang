import type { Metadata } from 'next';
import { Montserrat, Noto_Sans_KR, Paytone_One } from 'next/font/google';
import './globals.css';

const paytoneOne = Paytone_One({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-paytone-one',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  drawer,
}: Readonly<{
  children: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${montserrat.variable} ${paytoneOne.variable} h-full`}>
      <body
        className={`${notoSansKR.className} ${montserrat.className} ${paytoneOne.className} h-full bg-neutral-900 text-white antialiased`}
        suppressHydrationWarning>
        {children}

        {drawer}
      </body>
    </html>
  );
}
