'use client';

import { motion } from 'framer-motion';
import siteContent from '../../data/site-content.json';

const highlightTexts = siteContent.highlights;

const highlights = [
  {
    ...highlightTexts[0],
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
    ...highlightTexts[1],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
  },
  {
    ...highlightTexts[2],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
        <path d="M7 2v20"/>
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
      </svg>
    ),
  },
  {
    ...highlightTexts[3],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    ...highlightTexts[4],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    ...highlightTexts[5],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
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
      background: '#FFFFFF',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top border line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '70%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--copper)',
          marginBottom: 16,
          textAlign: 'center',
        }}>
          מה כלול בתוכנית
        </motion.p>

        {/* Headline */}
        <motion.h2 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
          fontWeight: 900,
          color: 'var(--text-dark)',
          lineHeight: 1.3,
          marginBottom: 16,
          textAlign: 'center',
        }}>
          ליווי צמוד. תהליך מובנה. תוצאות שמחזיקות.
        </motion.h2>

        <motion.p {...fadeUp(0.18)} style={{
          fontSize: 'clamp(0.97rem, 2.1vw, 1.1rem)',
          color: 'var(--text-medium)',
          lineHeight: 1.85,
          textAlign: 'center',
          maxWidth: 540,
          margin: '0 auto 56px',
        }}>
          זה לא קורס שמורידים ושוכחים. זה תהליך שנבנה צעד אחר צעד, עם כל הכלים שאת צריכה ועם נוכחות שלי לכל אורך הדרך.
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
                background: 'var(--bg-light)',
                border: '1.5px solid rgba(196,112,74,0.18)',
                borderRadius: 20,
                padding: '28px 24px',
                direction: 'rtl',
                boxShadow: '0 2px 16px rgba(28,16,8,0.05)',
              }}
              whileHover={{
                borderColor: 'rgba(196,112,74,0.45)',
                boxShadow: '0 6px 24px rgba(196,112,74,0.12)',
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 52, height: 52,
                borderRadius: '50%',
                background: 'rgba(196,112,74,0.1)',
                border: '1.5px solid rgba(196,112,74,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--copper)',
                marginBottom: 18,
              }}>
                {h.icon}
              </div>

              <p style={{
                fontSize: '1.02rem',
                fontWeight: 800,
                color: 'var(--text-dark)',
                marginBottom: 8,
                lineHeight: 1.4,
              }}>
                {h.title}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-medium)',
                lineHeight: 1.85,
              }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom border line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '70%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.25), transparent)',
      }} />
    </section>
  );
}
