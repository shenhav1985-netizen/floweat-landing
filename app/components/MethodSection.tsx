'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'תזונה פשוטה ומדויקת',
    body: 'לא תפריט. לא ספירת קלוריות. הנחיות ברורות שמתאימות לחיים האמיתיים שלך — גם בשבוע עמוס, גם באירוע, גם כשאין לך כוח.',
    icon: '◇',
  },
  {
    title: 'תודעה פשוטה ומדויקת',
    body: 'לא רגשות. לא כוח רצון. כלים מנטליים שמנתקים את הדחף האוטומטי לאכול — כדי שהבחירה תחזור אלייך.',
    icon: '○',
  },
];

export default function MethodSection() {
  return (
    <section style={{ background: 'var(--bg-light)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 16 }}
        >
          השיטה
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 900, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: 12 }}
        >
          שני עמודים. תוצאה אחת.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 44 }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.15 + 0.3 }}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(196,112,74,0.18)',
                borderRadius: 20,
                padding: '32px 24px',
                textAlign: 'right',
                boxShadow: '0 2px 16px rgba(28,16,8,0.06)',
              }}
            >
              <div style={{ fontSize: 32, color: 'var(--copper)', marginBottom: 16, lineHeight: 1 }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: 12 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', lineHeight: 1.8 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: 36, fontSize: '1rem', color: 'var(--copper)', fontWeight: 600, fontStyle: 'italic' }}
        >
          "תזונה פשוטה זו לא תזונה משעממת — זו תזונה מדויקת. וכשיש דיוק, הכל נהיה פשוט יותר."
        </motion.p>

      </div>
    </section>
  );
}
