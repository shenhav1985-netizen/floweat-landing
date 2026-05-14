'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'מכבות את הרעש בראש',
    body: 'מפרידות בין "מי שאת" לבין "הקול הרעב" שמנהל אותך, כך שהדיאלוג הפנימי המתיש נפסק ואת חוזרת לשמוע את עצמך.',
    badge: '0% מאבק, 100% שקט',
  },
  {
    title: 'נטרול הטריגרים הרגשיים',
    body: 'נמפה את "הכפתורים" שמפעילים אצלך אכילה (עייפות, עצבים, בדידות) ומנתקות את החיווט האוטומטי ששולח אותך למקרר.',
    badge: 'שליטה מלאה ללא כוח רצון',
  },
  {
    title: 'להעיר את המנכ״לית שבפנים',
    body: 'נעביר את המושכות מהדחפים והרגשות לשכל ולשיקול הדעת, ונבנה אצלך סמכות פנימית שיודעת לקבל החלטות גם מול הפיתוי הכי גדול.',
    badge: 'ביטחון עצמי בלתי שביר',
  },
  {
    title: 'לצרוב זהות חדשה של אישה חופשייה',
    body: 'מעבר מנטלי מאישה ש"נלחמת במשקל" לאישה ש"המשקל לא מעסיק אותה", דרך שינויי דפוסי חשיבה עמוקים.',
    badge: 'שינוי שלא דורש תחזוקה מתישה',
  },
  {
    title: 'בניית שגרת חיים חסינה',
    body: 'תטמיעי הרגלים גמישים שעובדים בשבילך גם בימים הכי לחוצים, בחופשות ובמשברים, כדי שלא תצטרכי להיות "מושלמת" בשביל לראות תוצאות.',
    badge: 'יציבות בכל סיטואציה',
  },
];

export default function MechanismSection() {
  return (
    <section style={{ background: 'var(--bg-taupe)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper-dark)', marginBottom: 16 }}
        >
          איך זה עובד
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 900, color: 'var(--text-dark)', lineHeight: 1.25, marginBottom: 14 }}
        >
          הצצה למנגנון
          <br />
          <span style={{ color: 'var(--copper-light)' }}>התהליך הקבוצתי</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1rem', color: 'var(--text-medium)', marginBottom: 20 }}
        >
          ב-10 שבועות אנחנו מתקינות לך מערכת הפעלה חדשה.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="copper-divider"
          style={{ marginBottom: 44 }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'right' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: 'rgba(255,255,255,0.5)', border: '1.5px solid rgba(196,112,74,0.2)', borderRadius: 18, padding: '22px 22px 22px 22px', position: 'relative', boxShadow: '0 2px 12px rgba(28,16,8,0.06)' }}
            >
              <div style={{ position: 'absolute', top: 18, left: 18, width: 32, height: 32, borderRadius: '50%', background: 'var(--copper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>
                {i + 1}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-medium)', lineHeight: 1.75, marginBottom: 14 }}>{step.body}</p>
              <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 9999, fontSize: '0.83rem', fontWeight: 600, background: 'rgba(196,112,74,0.15)', color: 'var(--copper-dark)', border: '1px solid rgba(196,112,74,0.3)' }}>
                {step.badge}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.2 }}
          style={{ marginTop: 32, padding: '28px 24px', borderRadius: 18, background: 'rgba(255,255,255,0.45)', border: '1.5px solid rgba(196,112,74,0.25)', textAlign: 'center' }}
        >
          <p style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--copper-dark)', marginBottom: 8 }}>תביני:</p>
          <p style={{ fontSize: '0.97rem', color: 'var(--text-medium)', lineHeight: 1.8 }}>
            אי אפשר לפתור בעיה רגשית עם פתרון טכני כמו ספירת קלוריות.
            <br />
            זה כמו לנסות לכבות שריפה עם מחשבון.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.4 }}
          style={{ marginTop: 20, textAlign: 'center' }}
        >
          <p style={{ fontSize: '1rem', color: 'var(--copper-dark)', fontWeight: 700, lineHeight: 1.8 }}>
            כשהמנגנון הנפשי משתחרר — הגוף מוריד את המשקל העודף בצורה טבעית.
          </p>
          <p style={{ fontSize: '0.93rem', color: 'var(--text-medium)', marginTop: 6 }}>
            לא דיאטה. לא כוח רצון. הגוף פשוט עוקב אחרי הראש.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
