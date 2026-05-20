'use client';

import { motion } from 'framer-motion';

const nutritionBullets = [
  'אוכלת טוב, בלי ספירת קלוריות',
  'מתכונים קלילים וטעימים שעובדים בחיים האמיתיים',
  'תזונה שמפחיתה חשקים, מחזירה אנרגיה ומשחררת משקל — החל מהשבוע הראשון',
];

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
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 16 }}
        >
          תוכנית הליווי הקבוצתית
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 900, color: 'var(--text-dark)', lineHeight: 1.25, marginBottom: 14 }}
        >
          אז מה מחכה לך בתוכנית?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1rem', color: 'var(--text-medium)', marginBottom: 20 }}
        >
          כל שבוע קורים שני דברים במקביל:
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="copper-divider"
          style={{ marginBottom: 40 }}
        />

        {/* Two pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, textAlign: 'right', marginBottom: 32 }}>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#FFFFFF', border: '1.5px solid rgba(196,112,74,0.2)', borderRadius: 20, padding: '32px 28px', boxShadow: '0 2px 16px rgba(28,16,8,0.06)' }}
          >
            <div style={{ fontSize: 28, color: 'var(--copper)', marginBottom: 14, lineHeight: 1 }}>◇</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: 20 }}>על הצלחת</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {nutritionBullets.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: 'var(--copper)', flexShrink: 0, marginTop: 3 }}>✦</span>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 20, fontSize: '0.97rem', color: 'var(--text-dark)', fontWeight: 600, lineHeight: 1.6 }}>
              את לא מרגישה שאת על דיאטה. את פשוט מרגישה טוב.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#FFFFFF', border: '1.5px solid rgba(196,112,74,0.2)', borderRadius: 20, padding: '32px 28px', boxShadow: '0 2px 16px rgba(28,16,8,0.06)' }}
          >
            <div style={{ fontSize: 28, color: 'var(--copper)', marginBottom: 14, lineHeight: 1 }}>○</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: 20 }}>בראש</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', lineHeight: 1.8 }}>
              כל שבוע עוצרות דפוס אחד שמחזיר אותך אחורה — ולומדות את מערכת ההפעלה המנטלית שלך, כך שאת משתחררת מהמשקל לתמיד, בלי שהוא יחזור.
            </p>
          </motion.div>
        </div>

        {/* Results block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ padding: '32px 28px', borderRadius: 20, background: 'rgba(196,112,74,0.07)', border: '1.5px solid rgba(196,112,74,0.2)', textAlign: 'right', marginBottom: 56 }}
        >
          <p style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: 14 }}>
            בסוף 12 שבועות:
          </p>
          <p style={{ fontSize: '0.97rem', color: 'var(--text-medium)', lineHeight: 1.85 }}>
            המשקל ירד. הנראות השתנתה. האנרגיה חזרה.
            <br />
            ואת לא חוששת שזה יחזור — כי הפעם לא יצאת לדיאטה.
            <br />
            שינית את הדרך שהמוח שלך חושב על אוכל. וזה לא הולך לשום מקום.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="copper-divider"
          style={{ marginBottom: 36 }}
        />

        {/* Pillars tags */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 20 }}
        >
          את מקבלת את היסודות שכל אישה חייבת לשלוט בהם:
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 52 }}
        >
          {pillars.map((p, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.4 }}
              style={{ padding: '10px 20px', borderRadius: 9999, fontSize: '0.9rem', fontWeight: 600, background: '#FFFFFF', border: '1.5px solid rgba(196,112,74,0.3)', color: 'var(--copper-dark)', boxShadow: '0 2px 8px rgba(28,16,8,0.06)' }}
            >
              ✦ {p}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-medium)', marginBottom: 32 }}
        >
          זאת לא תיאוריה. זאת מיומנות.
        </motion.p>

        {/* Outcomes */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 20 }}
        >
          אחרי 12 שבועות את הולכת לדעת בדיוק איך מרגיש גוף חזק, בריא וחיוני שמקבל את מה שהוא צריך:
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'right' }}>
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 + 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: '#FFFFFF', border: '1px solid rgba(196,112,74,0.15)', borderRight: '3px solid var(--copper)', borderRadius: '0 16px 16px 0', padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 12, boxShadow: '0 2px 10px rgba(28,16,8,0.05)' }}
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
          style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-light)', marginTop: 20 }}
        >
          וכל זה — בלי תפריטים נוקשים ובלי "מה מותר ומה אסור."
        </motion.p>

      </div>
    </section>
  );
}
