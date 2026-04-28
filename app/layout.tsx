import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
