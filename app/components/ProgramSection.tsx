'use client';

import { motion } from 'framer-motion';

const pillars = [
  'ויסות גוף רעב',
  'הרגלים שעובדים גם בעומס',
  'סדר תזונתי בלי אובססיה',
  'שקט מנטלי סביב אוכל',
  'יישום אישי בעולם האמיתי',
];

const outcomes = [
  'איך לאכול בלי לחשוב על זה כל היום.',
  'איך לבנות שגרה שמחזיקה גם כשאת עייפה.',
  'איך לזהות רעב אמיתי לעומת רעב רגשי.',
  'איך לעצור לופים של אכילה, אשמה ופיצוי.',
  'ואיך להחזיר שליטה רגועה — בלי מלחמה.',
];

export default function ProgramSection() {
  return (
    <section style={{ background: 'var(--bg-light)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>

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
          }}
        >
          תוכנית הליווי הקבוצתית
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            marginBottom: 14,
          }}
        >
          אז מה את מקבלת בפנים?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1rem', color: 'var(--text-medium)', marginBottom: 20 }}
        >
          את מקבלת את היסודות שכל אישה חייבת לשלוט בהם כדי שהתזונה תפסיק להיות מאבק:
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="copper-divider"
          style={{ marginBottom: 36 }}
        />

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 52,
          }}
        >
          {pillars.map((p, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.4 }}
              style={{
                padding: '10px 20px',
                borderRadius: 9999,
                fontSize: '0.9rem',
                fontWeight: 600,
                background: '#FFFFFF',
                border: '1.5px solid rgba(196,112,74,0.3)',
                color: 'var(--copper-dark)',
                boxShadow: '0 2px 8px rgba(28,16,8,0.06)',
              }}
            >
              ✦ {p}
            </motion.span>
          ))}
        </motion.div>

        {/* Italic bridge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: 'var(--text-medium)',
            marginBottom: 32,
          }}
        >
          זאת לא תיאוריה. זאת מיומנות.
        </motion.p>

        {/* Outcomes */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginBottom: 20,
          }}
        >
          אחרי 10 שבועות את הולכת לדעת בדיוק:
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'right' }}>
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 + 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(196,112,74,0.15)',
                borderRight: '3px solid var(--copper)',
                borderRadius: '0 16px 16px 0',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                boxShadow: '0 2px 10px rgba(28,16,8,0.05)',
              }}
            >
              <span style={{ color: 'var(--sage)', flexShrink: 0, marginTop: 2 }}>✓</span>
              <p style={{ fontSize: '0.97rem', color: 'var(--text-brown)', lineHeight: 1.7 }}>{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'var(--text-light)',
            marginTop: 20,
          }}
        >
          וכל זה — בלי תפריטים נוקשים ובלי "מה מותר ומה אסור."
        </motion.p>

      </div>
    </section>
  );
}
