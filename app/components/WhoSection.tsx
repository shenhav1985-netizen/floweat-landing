'use client';

import { motion } from 'framer-motion';

const WA_URL = `https://wa.me/972506409478?text=${encodeURIComponent('היי שנהב, אני רוצה לבדוק אם התהליך מתאים לי')}`;

const items = [
  {
    main: 'אישה חכמה, מתפקדת ועמוסה, שכבר ניסתה "להסתדר עם אוכל" בכל דרך אפשרית: דיאטות, שיטות, השראה, ימי ראשון עם כוונות.',
    sub: 'אבל בפועל ממשיכה להרגיש שהתזונה גוזלת ממך אנרגיה במקום להחזיר אותה.',
  },
  {
    main: 'אם את מצליחה במיליון תחומי חיים — אבל לא מרוצה מהנראות והרבה יותר עייפה מהמאבק בתזונה.',
    sub: null,
  },
  {
    main: 'אם הראש שלך תפוס באוכל והחלטות הרבה יותר ממה שהיית רוצה להודות.',
    sub: null,
  },
  {
    main: 'ואם עמוק בפנים את יודעת שמה שחסר לך זה לא עוד ידע — אלא שיטה בוגרת, יציבה ואישית שעובדת גם כשעמוס וגם כשאת עייפה.',
    sub: null,
  },
  {
    main: 'ואם נמאס לך שכל שינוי מחזיק שבוע-שבועיים ומתפרק בחיים האמיתיים, ואת רוצה לבנות אורח חיים עם תזונה שמתאימה לאופי שלך.',
    sub: null,
  },
];

export default function WhoSection() {
  return (
    <section style={{
      background: '#F2E8DF',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/images/hero4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        opacity: 0.15,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--copper)',
            lineHeight: 1.25,
            marginBottom: 20,
            letterSpacing: '0.04em',
          }}
        >
          ככה שאם את...
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 40 }}
        />

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'right', marginBottom: 40 }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(196,112,74,0.15)',
                borderRadius: 16,
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                boxShadow: '0 2px 12px rgba(28,16,8,0.05)',
              }}
            >
              <span style={{
                color: 'var(--copper)',
                fontSize: 20,
                flexShrink: 0,
                marginTop: 2,
                lineHeight: 1,
              }}>✦</span>
              <div>
                <p style={{ fontSize: '0.97rem', color: 'var(--text-brown)', lineHeight: 1.75 }}>{item.main}</p>
                {item.sub && (
                  <p style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--copper-dark)', marginTop: 6 }}>{item.sub}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginBottom: 28,
            lineHeight: 1.6,
          }}
        >
          אנחנו כאן כדי לסגור לך את הפינה — אחת ולתמיד.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
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
