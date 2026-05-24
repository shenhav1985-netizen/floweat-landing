'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function WhySolutionSection() {
  return (
    <section style={{ background: '#FFFFFF', padding: '96px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Why it fails */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--copper)',
            marginBottom: 20,
            textAlign: 'center',
          }}>
            אז מה באמת קורה פה?
          </p>

          <p style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.85,
            marginBottom: 16,
          }}>
            הסיבה שזה קורה שוב ושוב היא לא חוסר כוח רצון.
          </p>

          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 16,
          }}>
            הסיבה היא שכל השיטות שניסית עסקו רק בצלחת.
            <br />
            הן אמרו לך מה לאכול ומה לא.
            <br />
            אבל לא ראו אותך.
          </p>

          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
          }}>
            וכל עוד השיטה מזניחה אותך, השינוי לא יחזיק.
          </p>
          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 4,
          }}>
            לא כי את חלשה.
          </p>
          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 2,
          }}>
            כי השיטה לא נגעה בשורש.
          </p>
        </motion.div>

        {/* Key message box */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            background: 'rgba(196,112,74,0.07)',
            border: '1.5px solid rgba(196,112,74,0.25)',
            borderRadius: 20,
            padding: '28px 28px',
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          <p style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            fontWeight: 800,
            color: 'var(--text-dark)',
            lineHeight: 1.7,
            marginBottom: 12,
          }}>
            גוף ונפש הן מערכת אחת.
          </p>
          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.05rem)',
            color: 'var(--text-medium)',
            lineHeight: 1.9,
          }}>
            וכשעושים שינוי בלי להתייחס לשתיהן ביחד, הגוף לא משתף פעולה לאורך זמן.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="copper-divider"
          style={{ marginBottom: 40 }}
        />

        {/* The solution */}
        <motion.div {...fadeUp(0.35)} style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--copper)',
            marginBottom: 20,
            textAlign: 'center',
          }}>
            מה מעדכנות גרסה עושה אחרת
          </p>

          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 16,
          }}>
            אני עובדת איתך על שני הדברים במקביל.
          </p>

          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 16,
          }}>
            <strong style={{ color: 'var(--text-dark)' }}>תזונה שהגוף שלך באמת צריך.</strong>
            <br />
            אוכל אמיתי, טעים ומחייה. בלי ספירת קלוריות, בלי איסורים ובלי להשתעבד למטבח.
          </p>

          <p style={{
            fontSize: 'clamp(0.97rem, 2.2vw, 1.1rem)',
            color: 'var(--text-medium)',
            lineHeight: 2,
            marginBottom: 24,
          }}>
            <strong style={{ color: 'var(--text-dark)' }}>שחרור הדפוסים שמחזירים אותך אחורה.</strong>
            <br />
            מזהות מה גורם לך לחזור אחורה ומנטרלות את הדפוס.
          </p>

          <p style={{
            fontSize: 'clamp(1rem, 2.3vw, 1.15rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.7,
          }}>
            ביחד. לא אחד בלי השני.
            <br />
            כי רק ביחד זה מחזיק.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
