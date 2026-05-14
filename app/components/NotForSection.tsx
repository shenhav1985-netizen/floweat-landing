'use client';

import { motion } from 'framer-motion';

const forWho = [
  'מי שרוצה לרדת במשקל לתמיד — ולא לחזור לנקודת ההתחלה אחרי חודשיים.',
  'מי שהתעייפה מ"תעשיית הדיאטות" והלופ של "ירידה ועלייה" ששוחק את הנפש.',
  'אישה שרוצה להיראות מעולה ולא מוכנה שאורח חיים בריא יבוא על חשבון הנפש.',
  'אישה שרוצה שקט בראש — ולפנות מקום לדברים החשובים כמו משפחה, יצירה וקריירה.',
];

const notFor = [
  'מי שמחפשת פתרון קסם וקיצורי דרך — או דיאטת כאסח שתוריד 10 קילו בשבועיים.',
  'מאמינות ב"שיטות הרעב והענישה" — אני מאמינה בשיתוף פעולה עם הגוף, לא מלחמה.',
  'מי שרוצה להמשיך "להשטיח רגשות" עם אוכל — התהליך הזה דורש כנות אמיתית.',
];

export default function NotForSection() {
  return (
    <section style={{ background: 'var(--bg-light)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>

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
            color: 'var(--copper-light)',
            marginBottom: 16,
          }}
        >
          לפני שאנחנו מתקדמות
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
          חשוב שתדעי שזה לא מתאים לכל אחת
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

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          textAlign: 'right',
          marginBottom: 40,
        }}>
          {/* For whom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'var(--sage)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                color: '#FFF',
                fontWeight: 700,
                flexShrink: 0,
              }}>✓</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>למי זה מתאים</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {forWho.map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(143,168,136,0.08)',
                  border: '1px solid rgba(143,168,136,0.2)',
                  borderRadius: 14,
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}>
                  <span style={{ color: 'var(--sage)', flexShrink: 0, marginTop: 2, fontSize: 14 }}>✦</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-brown)', lineHeight: 1.75 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not for whom */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'rgba(196,112,74,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                color: 'var(--copper)',
                fontWeight: 700,
                flexShrink: 0,
              }}>✕</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#F0E8DF' }}>אבל זה לא מתאים אם...</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {notFor.map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(196,112,74,0.05)',
                  border: '1px solid rgba(196,112,74,0.15)',
                  borderRadius: 14,
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}>
                  <span style={{ color: '#554848', flexShrink: 0, marginTop: 2, fontSize: 14 }}>—</span>
                  <p style={{ fontSize: '0.9rem', color: '#6A5848', lineHeight: 1.75 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.6,
          }}>
            יש לך שיטה בוגרת. אחראית. יציבה ואנושית.
          </p>
          <p style={{ fontSize: '0.97rem', color: '#7A6858', marginTop: 8 }}>
            כזו שלא מבטיחה קסמים — אלא מסיימת מאבק.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
