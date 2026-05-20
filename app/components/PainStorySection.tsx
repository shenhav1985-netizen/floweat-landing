'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const quotes = [
  'ניסיתי כל דבר אפשרי ושום דבר לא מחזיק',
  'הגוף שלי תקוע ולא מגיב',
  'אני חוזרת אחורה תמיד',
  'אני לא מצליחה להתמיד ביותר מכמה שבועות',
  'אני רוצה לשים לזה סוף',
];

export default function PainStorySection() {
  return (
    <section style={{ background: 'var(--bg-light)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--copper)',
          marginBottom: 20,
          textAlign: 'center',
        }}>
          זה נשמע לך מוכר?
        </motion.p>

        {/* The story — Shenhav's text, formatted */}
        <motion.div {...fadeUp(0.1)} style={{ textAlign: 'right', marginBottom: 36 }}>
          <p style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.9,
            marginBottom: 20,
          }}>
            כל יום ראשון היא החלטה חדשה.
            <br />
            אני רוצה לרדת במשקל.
            <br />
            אני רוצה גוף בריא.
            <br />
            אני נכנסת לזה בכל הכוח.
            <br />
            נערכת. מתכוננת. מתארגנת.
          </p>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.6vw, 1.3rem)',
            fontWeight: 800,
            color: 'var(--copper-dark)',
            lineHeight: 1.7,
            marginBottom: 20,
          }}>
            וביום שלישי נשברת.
          </p>

          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 20,
          }}>
            אוי האכזבה מעצמי.
            <br />
            שוב נשברתי מול האוכל.
            <br />
            והלופ הזה רק חוזר.
          </p>

          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 24,
          }}>
            ובינתיים הגוף משלם את המחיר.
            <br />
            האנרגיה הולכת ונגמרת.
            <br />
            הגוף עייף ממאבק.
          </p>

          <p style={{
            fontSize: 'clamp(1rem, 2.3vw, 1.15rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.7,
          }}>
            ואת יודעת בתוך תוכך שאפשר אחרת.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="copper-divider"
          style={{ marginBottom: 32 }}
        />

        {/* Client voices */}
        <motion.p {...fadeUp(0.35)} style={{
          fontSize: '0.95rem',
          color: 'var(--text-medium)',
          textAlign: 'center',
          marginBottom: 24,
        }}>
          נשים רבות מגיעות אליי ואומרות:
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.4 + i * 0.08)}
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(196,112,74,0.18)',
                borderRadius: 12,
                padding: '14px 20px',
                direction: 'rtl',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ color: 'var(--copper)', fontSize: 14, flexShrink: 0 }}>✦</span>
              <p style={{
                fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                color: 'var(--text-medium)',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}>
                "{q}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
