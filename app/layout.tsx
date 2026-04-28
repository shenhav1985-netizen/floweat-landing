import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Bodoni_Moda } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'FLOWEAT | התחנה הסופית לנשים שעייפות ממאבק בירידה במשקל',
  description: 'תוך 10 שבועות אנחנו מנתקות מהשורש את התלות באוכל. שיטה מנטלית לשחרור דפוסי מחשבה שעבדה לאלפי נשים. ללא דיאטות, ללא כוח רצון.',
  openGraph: {
    title: 'floweat | התחנה הסופית לנשים שעייפות ממאבק',
    description: 'תוך 10 שבועות — ללא דיאטות, ללא כוח רצון, עם שקט מנטלי אמיתי',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${cormorant.variable} ${bodoni.variable}`}>
      <body>{children}</body>
    </html>
  );
}
