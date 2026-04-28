'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PainSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section style={{
      background: 'var(--bg-light)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/hero3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        opacity: 0.06,
        pointerEvents: 'none',
      }} />
      <div ref={ref} style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--copper)',
          marginBottom: 20,
        }}>
          את לא לבד בזה
        </motion.p>

        {/* Main headline */}
        <motion.h2 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(1.9rem, 5vw, 3rem)',
          fontWeight: 900,
          color: 'var(--text-dark)',
          lineHeight: 1.25,
          marginBottom: 24,
        }}>
          הגיע הזמן לנצח את דפוסי האכילה —
          <br />
          <span style={{ color: 'var(--copper)' }}>ולבנות הרגלים חדשים מהשורש</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 28 }}
        />

        {/* Body */}
        <motion.p {...fadeUp(0.3)} style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
          color: 'var(--text-medium)',
          lineHeight: 1.85,
          marginBottom: 20,
        }}>
          לא עוד תהליך שמתחיל בהתלהבות ונגמר בעייפות.
          <br />
          לא עוד ליווי שדורש ממך להיות{' '}
          <strong style={{ color: 'var(--text-brown)' }}>"חזקה"</strong>,{' '}
          <strong style={{ color: 'var(--text-brown)' }}>"ממושמעת"</strong>
          {' '}או{' '}
          <strong style={{ color: 'var(--text-brown)' }}>"יותר בעניין"</strong>
          {' '}— ולא עוד הבטחה לשינוי חיצוני שמתרסק על החיים האמיתיים שלך באמצע שבוע עמוס.
        </motion.p>

        <motion.p {...fadeUp(0.42)} style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
          color: 'var(--text-brown)',
          lineHeight: 1.85,
          fontWeight: 600,
        }}>
          שעובדים בשבילך גם כשאין לך כוח, זמן או חשק.
          <br />
          תהליך אחד מדויק שמחזיק שגרה, נראות חיצונית ואורח חיים לאורך זמן.
        </motion.p>

      </div>
    </section>
  );
}
