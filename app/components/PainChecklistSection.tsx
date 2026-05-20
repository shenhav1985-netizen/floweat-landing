'use client';

import { motion } from 'framer-motion';

const pains = [
  'הגוף שלך לא מגיב כמו לפני עשר שנים. אותה אכילה, תוצאה שונה.',
  'את יודעת מה לאכול. ועדיין לא מחזיקה בזה יותר מכמה שבועות.',
  'אוכל הוא לא רק אוכל. הוא מרגיע, מפצה, נותן שחרור ברגעים קשים.',
  'אחרי כל "יציאה מהפסים" באה האשמה. ואחרי האשמה מגיע ה"מחר מתחילה מחדש".',
  'ניסית תוכניות, דיאטניות, ספירת קלוריות. עבד בהתחלה. ואז הפסיק.',
];

export default function PainChecklistSection() {
  return (
    <section style={{
      background: 'var(--bg-taupe)',
      padding: '80px 24px',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

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
            textAlign: 'center',
          }}
        >
          לפני שממשיכים
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.7rem, 4.5vw, 2.4rem)',
            fontWeight: 900,
            color: 'var(--text-dark)',
            lineHeight: 1.3,
            marginBottom: 36,
            textAlign: 'center',
          }}
        >
          האם את מזדהה?
        </motion.h2>

        {/* Pain checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                background: 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(196,112,74,0.18)',
                borderRadius: 14,
                padding: '16px 20px',
                direction: 'rtl',
              }}
            >
              <span style={{
                flexShrink: 0,
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '2px solid var(--copper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 2,
              }}>
                <span style={{ fontSize: 12, color: 'var(--copper)', fontWeight: 700 }}>✓</span>
              </span>
              <p style={{
                fontSize: 'clamp(0.93rem, 2.1vw, 1rem)',
                color: 'var(--text-medium)',
                lineHeight: 1.75,
              }}>
                {pain}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Validation */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(0.97rem, 2.2vw, 1.05rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginBottom: 36,
          }}
        >
          אם הנהנת בראש לפחות לאחת מאלה, את לא לבד. ואת לא חלשה.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="copper-divider"
          style={{ marginBottom: 36 }}
        />

        {/* The pivot: body + mind = one system */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.85 }}
          style={{ textAlign: 'right' }}
        >
          <p style={{
            fontSize: 'clamp(1rem, 2.3vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 16,
          }}>
            הסיבה שכל השיטות לא החזיקו?
            <br />
            כולן עסקו רק בצלחת. לא בך.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2.3vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 16,
          }}>
            האוכל מעורר בנו סערות רגשיות. לחץ, עייפות, בדידות, שמחה.
            <br />
            וכל עוד לא מתייחסים לזה, שום תוכנית תזונה לא תחזיק לאורך זמן.
          </p>
          <p style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            fontWeight: 800,
            color: 'var(--text-dark)',
            lineHeight: 1.7,
          }}>
            הגוף והנפש הן מערכת אחת.
            <br />
            וכשמתייחסים לשתיהן ביחד, הכל מתחיל לזוז.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
