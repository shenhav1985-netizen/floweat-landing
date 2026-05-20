'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProgramIntroSection() {
  return (
    <section style={{
      background: 'var(--bg-light)',
      padding: '80px 24px',
    }}>
      <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--copper)',
          marginBottom: 16,
        }}>
          מעדכנות גרסה
        </motion.p>

        {/* Headline */}
        <motion.h2 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 900,
          color: 'var(--text-dark)',
          lineHeight: 1.3,
          marginBottom: 28,
        }}>
          מה זו התוכנית הזו בדיוק?
        </motion.h2>

        {/* Program description */}
        <motion.div {...fadeUp(0.2)} style={{
          background: 'rgba(255,255,255,0.7)',
          border: '1.5px solid rgba(196,112,74,0.18)',
          borderRadius: 20,
          padding: '28px 28px',
          marginBottom: 32,
          textAlign: 'right',
        }}>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
            color: 'var(--text-medium)',
            lineHeight: 1.95,
            marginBottom: 16,
          }}>
            תוכנית ליווי קבוצתית, דיגיטלית, של <strong style={{ color: 'var(--text-dark)' }}>12 שבועות</strong>.
            <br />
            כל שבוע: מפגש קבוצתי חי, חומרים מעשיים וכלים ליישום מיידי.
            <br />
            בלי לצאת מהבית. בלי תוכניות תזונה נוקשות. בלי לספור כלום.
          </p>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
            color: 'var(--text-medium)',
            lineHeight: 1.95,
          }}>
            שילוב של תזונה שמחייה את הגוף מבפנים, עם שחרור הדפוסים המנטליים שגורמים לך לחזור שוב ושוב לאותה נקודה.
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

        {/* Shenhav personal commitment */}
        <motion.div {...fadeUp(0.4)} style={{ textAlign: 'right' }}>
          <p style={{
            fontSize: 'clamp(1rem, 2.3vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 16,
          }}>
            גם אני הייתי שם. עמוק.
            <br />
            בתוך אותו לופ בדיוק.
            <br />
            ואני יודעת מה זה להרגיש שהבעיה היא בך, שאין לך כוח רצון, שאת פשוט חלשה.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2.3vw, 1.15rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.8,
          }}>
            זה לא נכון.
            <br />
            ואני מתחייבת שיש דרך אחרת.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
