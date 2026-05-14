'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '8–12 ק"ג', label: 'ירידה ממוצעת ב-10 שבועות' },
  { number: '0', label: 'תפריטים, ספירת קלוריות או איסורים' },
  { number: 'לתמיד', label: 'לא חוזרות לנקודת ההתחלה' },
];

export default function StatsStrip() {
  return (
    <section style={{ background: 'var(--bg-taupe)', padding: '40px 24px', borderTop: '1px solid rgba(196,112,74,0.2)', borderBottom: '1px solid rgba(196,112,74,0.2)' }}>
      <div style={{
        maxWidth: 860,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 24,
        textAlign: 'center',
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <div style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
              fontWeight: 900,
              fontFamily: 'Heebo, sans-serif',
              background: 'linear-gradient(135deg, #E8B89A 0%, #C4704A 60%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
              marginBottom: 6,
            }}>
              {s.number}
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.5, opacity: 0.8 }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
