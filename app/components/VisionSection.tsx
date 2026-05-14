'use client';

import { motion } from 'framer-motion';

const items = [
  {
    label: 'שקט',
    body: 'אין דרמות סביב אוכל. אין חשיבה אובססיבית ואין החלטות אינסופיות. יש סדר, פשטות וביטחון מלא במה שנכנס לגוף ביום רגיל, לא ביום מושלם.',
    example: 'ארוחת שישי בלי לספור מה אכלת.',
    icon: '○',
  },
  {
    label: 'יותר קלילות',
    body: 'הגוף נרגע. האכילה מפסיקה להיות מאבק יומיומי. את לא "בדיאטה" ולא "נשברת" — את פשוט חיה בתוך שגרה עם הרגלים שעובדים בשבילך. והמשקל העודף יורד — באופן טבעי, בלי מאמץ מיוחד.',
    example: 'קמה בבוקר בלי אשמה על אתמול.',
    icon: '◇',
  },
  {
    label: 'יותר שליטה',
    body: 'לא דרך איסורים ולא דרך כוח רצון. אלא דרך שיטה ברורה שמחזיקה גם בשבוע עמוס, גם בעייפות וגם בחיים עצמם.',
    example: 'יצאת לאירוע, אכלת מה שרצית — ולא הרגשת שצריך לפצות למחרת.',
    icon: '△',
  },
  {
    label: 'יותר ביטחון בעצמך',
    body: 'את יוצרת סמכות פנימית שמותאמת אישית לך. ובמקום לשאול שוב: "למה זה לא מחזיק אצלי" — יש לך הרגלים חדשים שמקרינים על כל תחומי החיים.',
    example: 'ראית עוגה ולא נכנסת לדיון פנימי — פשוט החלטת.',
    icon: '✦',
  },
];

export default function VisionSection() {
  return (
    <section style={{ background: 'var(--bg-taupe)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          המציאות שלך אחרי שהמאבק נגמר
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          איך נראית המציאות שלך
          <br />
          <span style={{ color: 'var(--copper-light)' }}>אחרי שהמאבק נגמר?</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 52 }}
        />

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          textAlign: 'right',
        }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(196,112,74,0.18)',
                borderRadius: 20,
                padding: '28px 24px',
                borderRight: '3px solid var(--copper)',
                boxShadow: '0 2px 16px rgba(28,16,8,0.06)',
              }}
            >
              <div style={{
                fontSize: 28,
                color: 'var(--copper)',
                marginBottom: 12,
                lineHeight: 1,
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--text-dark)',
                marginBottom: 10,
              }}>
                {item.label}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-medium)',
                lineHeight: 1.8,
                marginBottom: 10,
              }}>
                {item.body}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--copper-light)',
                fontStyle: 'italic',
                opacity: 0.85,
              }}>
                ← {item.example}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
