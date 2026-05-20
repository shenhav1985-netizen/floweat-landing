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
  'אני רוצה לאכול בריא ולא מצליחה להתמיד',
  'אין לי כוחות להתחיל כל פעם מחדש, אני חלשה מול אוכל',
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
        <motion.div {...fadeUp(0.1)} style={{ textAlign: 'center', marginBottom: 36 }}>
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
          אלו היו המשפטים הקבועים שלי:
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

        {/* Enthusiastic bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{ textAlign: 'center', marginTop: 44 }}
        >
          <p style={{
            fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
            fontWeight: 800,
            color: 'var(--text-dark)',
            lineHeight: 1.7,
            marginBottom: 12,
          }}>
            זה בדיוק מה שאנחנו עושות כאן.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
            fontWeight: 700,
            color: 'var(--copper)',
            lineHeight: 1.6,
            marginBottom: 20,
          }}>
            12 שבועות שמנתקים את לופ הדיאטות.
          </p>
          <p style={{
            display: 'inline-block',
            fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
            fontWeight: 900,
            color: 'var(--copper-dark)',
            letterSpacing: '0.04em',
            background: 'rgba(196,112,74,0.09)',
            border: '2px solid rgba(196,112,74,0.3)',
            borderRadius: 12,
            padding: '10px 28px',
          }}>
            התוכנית מתחילה ב-16/6
          </p>
        </motion.div>

      </div>
    </section>
  );
}
