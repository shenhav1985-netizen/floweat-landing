import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'מעדכנות גרסה | התחנה הסופית לנשים שעייפות ממאבק',
  description: '׳×׳•׳ 10 ׳©׳‘׳•׳¢׳•׳× ׳׳ ׳—׳ ׳• ׳׳ ׳×׳§׳•׳× ׳׳”׳©׳•׳¨׳© ׳׳× ׳”׳×׳׳•׳× ׳‘׳׳•׳›׳. ׳©׳™׳˜׳” ׳׳ ׳˜׳׳™׳× ׳׳©׳—׳¨׳•׳¨ ׳“׳₪׳•׳¡׳™ ׳׳—׳©׳‘׳” ׳©׳¢׳‘׳“׳” ׳׳׳׳₪׳™ ׳ ׳©׳™׳. ׳׳׳ ׳“׳™׳׳˜׳•׳×, ׳׳׳ ׳›׳•׳— ׳¨׳¦׳•׳.',
  openGraph: {
    title: 'מעדכנות גרסה | התחנה הסופית לנשים שעייפות ממאבק',
    description: '׳×׳•׳ 10 ׳©׳‘׳•׳¢׳•׳× ג€” ׳׳׳ ׳“׳™׳׳˜׳•׳×, ׳׳׳ ׳›׳•׳— ׳¨׳¦׳•׳, ׳¢׳ ׳©׳§׳˜ ׳׳ ׳˜׳׳™ ׳׳׳™׳×׳™',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${cormorant.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

