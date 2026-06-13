'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'ליווי אישי צמוד שלי',
    desc: 'אני כאן איתך לאורך כל הדרך. נוכחת, זמינה ומלווה כל צעד מהרגע הראשון ועד האחרון.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'הדרכות מפורטות שבועיות',
    desc: 'תכנים ברורים ומובנים שמובילים אותך צעד אחר צעד, בלי לאבד את הדרך.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    title: 'הקלטות יומיות',
    desc: 'תכנים קצרים שאת שומעת בקצב שלך, בכל שעה שמתאימה לך. פעם ושתיים אם צריך.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
  },
  {
    title: 'אפליקציה מסודרת',
    desc: 'כל כלי, כל תוכן וכל מעקב במקום אחד. נגיש תמיד, ברור תמיד.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    title: 'יומן התקדמות',
    desc: 'תראי בעצמך כמה רחוק הגעת. כל שינוי קטן נספר, נשמר ומחזק אותך.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'צעדים ברורים והדרגתיים',
    desc: 'כל שבוע שלב אחד. אין כאן "הכל או כלום". יש תהליך שבנוי נכון ועובד.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h4v-4h4v-4h4v-4h4V4"/>
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProgramHighlightsSection() {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #2A1208 0%, #3A1E0C 50%, #2E1510 100%)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle glow top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '70%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.5), transparent)',
      }} />
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '40vw', height: '40vw', maxWidth: 420, maxHeight: 420,
        background: 'radial-gradient(ellipse, rgba(196,112,74,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--copper-light)',
          marginBottom: 16,
          textAlign: 'center',
        }}>
          מה כלול בתוכנית
        </motion.p>

        {/* Headline */}
        <motion.h2 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
          fontWeight: 900,
          color: '#F5EDE4',
          lineHeight: 1.3,
          marginBottom: 16,
          textAlign: 'center',
        }}>
          ליווי צמוד. תהליך מובנה. תוצאות שמחזיקות.
        </motion.h2>

        <motion.p {...fadeUp(0.18)} style={{
          fontSize: 'clamp(0.97rem, 2.1vw, 1.1rem)',
          color: 'rgba(245,237,228,0.65)',
          lineHeight: 1.85,
          textAlign: 'center',
          marginBottom: 56,
          maxWidth: 540,
          margin: '0 auto 56px',
        }}>
          זה לא קורס שמורידים ושוכחים. זה תהליך שנבנה צעד אחר צעד, עם כל הכלים שאת צריכה, ועם נוכחות שלי לכל אורך הדרך.
        </motion.p>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(265px, 1fr))',
          gap: 18,
        }}>
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.28 + i * 0.07)}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(196,112,74,0.22)',
                borderRadius: 20,
                padding: '28px 24px',
                direction: 'rtl',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              whileHover={{
                borderColor: 'rgba(196,112,74,0.5)',
                background: 'rgba(196,112,74,0.06)',
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 52, height: 52,
                borderRadius: '50%',
                background: 'rgba(196,112,74,0.12)',
                border: '1px solid rgba(196,112,74,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--copper-light)',
                marginBottom: 18,
              }}>
                {h.icon}
              </div>

              <p style={{
                fontSize: '1.02rem',
                fontWeight: 800,
                color: '#F5EDE4',
                marginBottom: 10,
                lineHeight: 1.4,
              }}>
                {h.title}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(245,237,228,0.6)',
                lineHeight: 1.85,
              }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Subtle glow bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '70%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.4), transparent)',
      }} />
    </section>
  );
}
