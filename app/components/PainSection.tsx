'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PainSection() {
  return (
    <section style={{
      background: 'var(--bg-light)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>

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

        {/* Headline */}
        <motion.h2 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(1.7rem, 4.5vw, 2.6rem)',
          fontWeight: 900,
          color: 'var(--text-dark)',
          lineHeight: 1.3,
          marginBottom: 32,
        }}>
          ככל שאנחנו מתקדמות בגיל
          <br />
          <span style={{ color: 'var(--copper)' }}>הגוף מבקש משהו אחר</span>
        </motion.h2>

        {/* Body text */}
        <motion.div {...fadeUp(0.22)} style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
          color: 'var(--text-medium)',
          lineHeight: 2,
          marginBottom: 32,
          textAlign: 'right',
        }}>
          <p style={{ marginBottom: 16 }}>
            הגוף עובד אחרת. מתנהג שונה. ומה שעבד לפני עשר שנים
            <br />
            פשוט לא עובד היום.
          </p>
          <p style={{ marginBottom: 16 }}>
            והאמת? הוא צודק.
            <br />
            הוא לא רוצה עוד מלחמה.
            <br />
            הוא רוצה אוכל שמחייה אותו, שמעורר אותו, שמטפח אותו.
          </p>
          <p style={{ fontWeight: 700, color: 'var(--text-dark)' }}>
            הגוף עייף ממאבק.
            <br />
            הוא לא צריך אויב — הוא צריך אותך איתו.
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

        {/* Return love */}
        <motion.div {...fadeUp(0.42)} style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
          color: 'var(--text-medium)',
          lineHeight: 2,
          textAlign: 'right',
        }}>
          <p style={{ marginBottom: 16 }}>
            כשהוא מקבל את זה —
            <br />
            הוא מחזיר לך אהבה פי שניים.
          </p>
          <p style={{
            fontWeight: 700,
            color: 'var(--text-dark)',
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
          }}>
            במראה. במשקל. ובעור הפנים.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
