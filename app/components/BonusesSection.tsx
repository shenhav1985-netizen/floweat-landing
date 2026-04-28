'use client';

import { motion } from 'framer-motion';

const WA_URL = `https://wa.me/972506409478?text=${encodeURIComponent('היי שנהב, אני רוצה לבדוק אם התהליך מתאים לי')}`;

const bonuses = [
  {
    num: '01',
    title: 'ערכת החילוץ המנטלי',
    body: 'לרגעים שבהם "הדחף" צורח ואין לך כוח להילחם. תרגילים מנטליים קצרים שנועדו לעשות "איפוס מערכת" בזמן אמת. מרגישה דחף בלתי נשלט ב-22:00? שימי פליי ותוך 3 דקות את חוזרת לשליטה.',
    icon: '◎',
  },
  {
    num: '02',
    title: 'הפרוטוקול לבריאות טבעית',
    body: 'כי לרדת במשקל זה לא מספיק — את רוצה להרגיש חיה. עקרונות הבריאות הטבעית שהופכים גוף עייף וכבד למכונת אנרגיה. בלי תוספים יקרים ובלי טרנדים חולפים.',
    icon: '◈',
  },
  {
    num: '03',
    title: 'קורס הסירים הבריאים שלי',
    body: 'הסוד למטבח שכל משפחה טורפת — בלי להרגיש בדיאטה. שיטות הבישול שחוסכות זמן ומייצרות אוכל מנחם, ביתי ובריא במינימום מאמץ.',
    icon: '◇',
  },
  {
    num: '04',
    title: 'ארכיון מתוקים (ללא רגשות אשם)',
    body: 'חושבת להיפרד מקינוחים? בדיוק ההפך. המחברת האישית שלי למתוקים שפויים — עוגות, עוגיות וקינוחים שמספקים את הנפש אבל לא מקפיצים את הסוכר לשמיים.',
    icon: '◆',
  },
];

export default function BonusesSection() {
  return (
    <section style={{
      background: 'var(--bg-light)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/hero6.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        opacity: 0.15,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--copper)',
            marginBottom: 16,
          }}
        >
          אבל זה לא הכל...
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          כשאת מצטרפת, את מקבלת
          <br />
          <span style={{ color: 'var(--copper)' }}>גישה מיידית ל-4 בונוסים</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 48 }}
        />

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
          textAlign: 'right',
          marginBottom: 40,
        }}>
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(196,112,74,0.15)',
                borderRadius: 20,
                padding: '24px 22px',
                boxShadow: '0 4px 20px rgba(28,16,8,0.06)',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--copper)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}>
                  {b.num}
                </span>
                <span style={{ fontSize: 22, color: 'var(--copper-light)', lineHeight: 1 }}>{b.icon}</span>
              </div>

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-dark)',
                marginBottom: 10,
              }}>
                {b.title}
              </h3>
              <p style={{
                fontSize: '0.93rem',
                color: 'var(--text-brown)',
                lineHeight: 1.75,
              }}>
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            padding: '24px',
            borderRadius: 18,
            background: '#F2E8DF',
            border: '1.5px solid rgba(196,112,74,0.2)',
            marginBottom: 32,
            textAlign: 'center',
          }}
        >
          <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)', marginBottom: 6 }}>
            והתוצאות?
          </p>
          <p style={{ fontSize: '0.97rem', color: 'var(--text-brown)', lineHeight: 1.8 }}>
            לא ירידה של 3 קילו שחוזרים בריבית בחגים...
            <br />
            אלא <strong style={{ color: 'var(--copper-dark)' }}>יציבות מנטלית.</strong>{' '}
            את מקבלת את כל המעטפת להחזיר לעצמך את החיים ולבנות אורח חיים קליל וטבעי מחודש לחודש.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="cta-btn"
        >
          אני רוצה לבדוק שהתהליך מתאים לי ←
        </motion.a>

      </div>
    </section>
  );
}
