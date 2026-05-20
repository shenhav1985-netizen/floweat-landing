'use client';

import { motion } from 'framer-motion';

const weeks = [
  {
    label: 'שבועות 1-2',
    title: 'מווסתות את הגוף',
    body: 'מחזירות את הגוף לאיזון הטבעי שלו. שחרור משקל ראשוני, תוך כדי היכרות ראשונה עם הגרסה הישנה שלך.',
  },
  {
    label: 'שבועות 3-4',
    title: 'מכירות את הגוף שלך מבפנים',
    body: 'מבינות איך גוף האישה עובד, איך המחזוריות משפיעה על הרגשה ועל אכילה. ומתחילות לקחת אחריות על המנגנון הישן.',
  },
  {
    label: 'שבועות 5-7',
    title: 'בונות תזונה חזקה ומסוגלות',
    body: 'אוכלות טוב ומזינות את הגוף, בלי להשתעבד למטבח. ומפתחות כלים לניהול דחפים שמחזיקים גם ביום עמוס וגם ביום קשה.',
  },
  {
    label: 'שבועות 8-9',
    title: 'עובדות עם הצרכים האמיתיים',
    body: 'מכירות את 7 הצרכים האותנטיים שלך. לומדות לזהות אותם ולמלא אותם, בלי לברוח לאוכל.',
  },
  {
    label: 'מפגש 10',
    title: 'יוצרות עצמאות',
    body: 'בונות תוכנית אישית לניהול עצמי שתחזיק גם אחרי שהתוכנית נגמרת. כי המטרה שלי היא שלא תצטרכי אותי.',
  },
  {
    label: 'מפגשים 11-12',
    title: 'מחזקות את הגרסה החדשה',
    body: 'מתחברות לערכים, לתמונה העתידית. יוצאות מהתוכנית כגרסה חדשה, יציבה וחזקה שאוכלת טוב מתוך בחירה ולא ממאבק.',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProgramDetailsSection() {
  return (
    <section style={{ background: 'var(--bg-light)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--copper)',
          marginBottom: 16,
          textAlign: 'center',
        }}>
          בפנים התוכנית
        </motion.p>

        {/* Headline */}
        <motion.h2 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(1.7rem, 4.5vw, 2.4rem)',
          fontWeight: 900,
          color: 'var(--text-dark)',
          lineHeight: 1.3,
          marginBottom: 16,
          textAlign: 'center',
        }}>
          אני רוצה שתדעי בדיוק למה את נכנסת
        </motion.h2>

        {/* Format */}
        <motion.p {...fadeUp(0.18)} style={{
          fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
          color: 'var(--text-medium)',
          lineHeight: 1.8,
          textAlign: 'center',
          marginBottom: 48,
        }}>
          תוכנית ליווי דיגיטלית עם מפגשי זום חיים וליווי מלא שלי.
          <br />
          <strong style={{ color: 'var(--text-dark)' }}>12 שבועות. אני איתך בכל שלב.</strong>
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 48 }}
        />

        {/* Week cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
          {weeks.map((w, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.25 + i * 0.08)}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(196,112,74,0.2)',
                borderRadius: 16,
                padding: '24px 24px',
                direction: 'rtl',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '0 20px',
                alignItems: 'start',
              }}
            >
              {/* Label */}
              <div style={{
                background: 'rgba(196,112,74,0.1)',
                border: '1px solid rgba(196,112,74,0.25)',
                borderRadius: 8,
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--copper-dark)',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
                alignSelf: 'start',
                marginTop: 2,
              }}>
                {w.label}
              </div>

              {/* Content */}
              <div>
                <p style={{
                  fontSize: 'clamp(0.97rem, 2.2vw, 1.05rem)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}>
                  {w.title}
                </p>
                <p style={{
                  fontSize: 'clamp(0.88rem, 1.9vw, 0.97rem)',
                  color: 'var(--text-medium)',
                  lineHeight: 1.8,
                }}>
                  {w.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing promise */}
        <motion.div
          {...fadeUp(0.8)}
          style={{
            background: 'rgba(196,112,74,0.07)',
            border: '1.5px solid rgba(196,112,74,0.2)',
            borderRadius: 20,
            padding: '28px 28px',
            textAlign: 'right',
          }}
        >
          <p style={{
            fontSize: 'clamp(1rem, 2.3vw, 1.15rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.75,
            marginBottom: 12,
          }}>
            בסוף 12 השבועות את לא רק יורדת במשקל.
          </p>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
            color: 'var(--text-medium)',
            lineHeight: 1.9,
          }}>
            את יוצאת עם גרסה חדשה של עצמך. אחת שאוכלת טוב, בריא ואיכותי מתוך בחירה טבעית.
            <br />
            בלי ספירת קלוריות. בלי איסורים. בלי לחזור אחורה.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
