'use client';

import { motion } from 'framer-motion';

const weeks = [
  {
    num: '01',
    title: 'תיאום ציפיות והכנה תזונתית',
    body: 'אלווה אותך צעד-צעד איך להתכונן ולאכול נכון כדי לאזן את הגוף ולפתוח בשחרור משקל כבר מהשבוע הראשון. ביחד נתחיל להכיר את המנגנון הרגשי שמניע את הקשר שלך עם אוכל.',
  },
  {
    num: '02',
    title: 'מתכוננות לסופי שבוע',
    body: 'תלמדי איך להגיע לסוף שבוע מוכנה, מה לאכול ואיך שומרים על ההגה גם בימים שמחוץ לשגרה. נמשיך להעמיק יחד בתהליך הרגשי.',
  },
  {
    num: '03',
    title: 'תזונה נשית ומחזוריות',
    body: 'נלמד יחד כיצד כל שלב במחזור הנשי משפיע על התיאבון, האנרגיה והאכילה, ואיך לאכול בהתאם. עוד שכבה של התהליך הרגשי.',
  },
  {
    num: '04',
    title: 'אחריות אישית ומנגנון הגוף',
    body: 'ממשיכות לבנות הבנה עמוקה של הקשר בין גוף ונפש. מתרגלות אחריות אישית על המנגנון הקיים ומפתחות יחס חדש לגוף שלנו.',
  },
  {
    num: '05',
    title: 'בניית מסוגלות ואיפוק',
    body: 'מתחזקות תזונה עשירה בלי להשתעבד למטבח. מפתחות כלים פרקטיים לניהול דחפים ולעמידה מול "מה-כבר-יהיה" בימים מאתגרים.',
  },
  {
    num: '06',
    title: 'סמכות פנימית ועצמאות',
    body: 'בונות סמכות פנימית אמיתית. לא כוח רצון לחוץ, אלא בחירה שבאה מתוך הכרה עמוקה בעצמנו ובמה שאנחנו רוצות.',
  },
  {
    num: '07',
    title: 'אכילה בחוץ, חגים ואירועים',
    body: 'מנהלות את האכילה מחוץ לבית בלי סטרס. מסעדות, חגים, אירועים משפחתיים, נלמד להיות נוכחות ולהנות בלי לפרוק את כל מה שבנינו.',
  },
  {
    num: '08',
    title: 'מכירות את 7 הצרכים האמיתיים',
    body: 'נכיר את 7 הצרכים האותנטיים שגורמים לנו לפנות לאוכל. הצעד הראשון הוא לזהות אותם, וזה משנה הכל.',
  },
  {
    num: '09',
    title: 'עובדות עם הצרכים',
    body: 'לומדות למלא את הצרכים האמיתיים בלי לברוח לאוכל. כלים ספציפיים לכל צורך, בפרקטיקה יומיומית.',
  },
  {
    num: '10',
    title: 'יוצרות עצמאות',
    body: 'בונות תוכנית אישית לניהול עצמי שתחזיק גם אחרי שהתוכנית נגמרת. כי המטרה שלי היא שלא תצטרכי אותי לנצח.',
  },
  {
    num: '11',
    title: 'חיבור לערכים ולחזון',
    body: 'מתחברות לערכים האמיתיים ולתמונה שאנחנו רוצות ליצור לעצמנו. מכאן מגיע הכוח שמחזיק לטווח ארוך.',
  },
  {
    num: '12',
    title: 'מחזקות את הגרסה החדשה',
    body: 'את יוצאת מהתוכנית יציבה וחזקה. אוכלת מתוך בחירה, לא מתוך מאבק. זו הגרסה שתישאר.',
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
          12 שבועות של תהליך מובנה.
          <br />
          <strong style={{ color: 'var(--text-dark)' }}>כל שבוע יש לך הקלטות, תרגולים, מעקב יומי באפליקציה וליווי צמוד שלי.</strong>
          <br />
          בלי להשאיר אותך לבד עם שאלות.
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
          {weeks.map((w, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.25 + i * 0.06)}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(196,112,74,0.15)',
                borderRadius: 18,
                padding: '22px 24px',
                direction: 'rtl',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '0 20px',
                alignItems: 'start',
                boxShadow: '0 2px 16px rgba(28,16,8,0.05)',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
            >
              {/* Number circle */}
              <div style={{
                width: 44, height: 44,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(196,112,74,0.12) 0%, rgba(196,112,74,0.06) 100%)',
                border: '1.5px solid rgba(196,112,74,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}>
                <span style={{
                  fontSize: 12,
                  fontWeight: 900,
                  color: 'var(--copper-dark)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                }}>
                  {w.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <p style={{
                  fontSize: 'clamp(0.97rem, 2.2vw, 1.05rem)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: 6,
                  lineHeight: 1.4,
                }}>
                  {w.title}
                </p>
                <p style={{
                  fontSize: 'clamp(0.88rem, 1.9vw, 0.95rem)',
                  color: 'var(--text-medium)',
                  lineHeight: 1.85,
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
            textAlign: 'center',
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
            את יוצאת עם גרסה חדשה של עצמך.
            <br />
            שאוכלת טוב, בריא ואיכותי מתוך בחירה טבעית.
            <br />
            בלי ספירת קלוריות. בלי איסורים. בלי לחזור אחורה.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
