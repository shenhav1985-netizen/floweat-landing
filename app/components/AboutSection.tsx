'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const story = [
  { text: 'אני יודעת בדיוק איך זה מרגיש כשהאוכל הוא לא דלק, אלא המנהל שלך.' },
  { text: 'אם את בלחץ? האוכל מרגיע. אם את חוגגת? האוכל הוא המסיבה. אם את עייפה? האוכל הוא הנחמה.' },
  { text: 'שנים הייתי שם. במלחמה. רצה בין דיאטות, נשברת, מתחילה מחדש ביום ראשון. ולא נולדתי עם "משמעת ברזל". הייתי בטוחה שהבעיה היא בי. שאני פשוט... חלשת אופי.' },
  { text: 'אז יצאתי למסע של שנים... וגיליתי משהו מפתיע.' },
];

const story2 = [
  { text: 'שכל השיטות הישנות פשוט לא עובדות. כולן צעקו סיסמאות של "תסגרי את הפה", "תספרי קלוריות", "תהיי חזקה" — אבל לא חיפשתי מלחמה. חיפשתי שקט.' },
  { text: 'לקח זמן... לימודים מתחומים שונים — רפואה תזונתית, טיפול באכילה רגשית, שיטות של רפואת הרמב"ם. ניסיתי הכול על עצמי.' },
  { text: 'ובסוף זה קרה: פיצחתי את מנגנון הניתוק מהאכילה הרגשית. בלי כוח רצון מתיש ובלי להילחם ברעב. מאז אני פשוט חיה — ומעבירה את זה הלאה.' },
];

export default function AboutSection() {
  return (
    <section style={{
      background: '#F2E8DF',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>

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
          כותבת לך מהלב
        </motion.p>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            color: 'var(--text-dark)',
            lineHeight: 1.15,
            marginBottom: 8,
          }}
        >
          שנהב בנימין
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1rem', color: 'var(--text-medium)', marginBottom: 32 }}
        >
          מומחית לבריאות טבעית וטיפול גוף-נפש באכילה רגשית
        </motion.p>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            width: 'min(220px, 60vw)',
            height: 'min(220px, 60vw)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(196,112,74,0.4)',
            boxShadow: '0 8px 36px rgba(28,16,8,0.14)',
            margin: '0 auto 36px',
            position: 'relative',
          }}
        >
          <Image
            src="/images/about.jpg"
            alt="שנהב בנימין"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="copper-divider"
          style={{ marginBottom: 36 }}
        />

        {/* Story */}
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {story.map((s, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              style={{ fontSize: '0.97rem', color: 'var(--text-brown)', lineHeight: 1.85 }}
            >
              {s.text}
            </motion.p>
          ))}

          {/* Quotes box */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              background: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(196,112,74,0.2)',
              borderRadius: 16,
              padding: '20px 22px',
            }}
          >
            <p style={{ fontSize: '0.95rem', color: 'var(--text-brown)', marginBottom: 12, lineHeight: 1.8 }}>
              שכל השיטות הישנות שלמדתי פשוט לא עובדות. כולן צעקו סיסמאות של:
            </p>
            {['"תסגרי את הפה"', '"תספרי נקודות וקלוריות"', '"תילחמי בעצמך — תהיי חזקה!"'].map((q, i) => (
              <p key={i} style={{ fontWeight: 700, color: 'var(--copper-dark)', textAlign: 'center', fontSize: '1rem' }}>{q}</p>
            ))}
            <p style={{ fontSize: '0.95rem', color: 'var(--text-brown)', marginTop: 12, lineHeight: 1.8 }}>
              אבל לא חיפשתי מלחמה. חיפשתי שקט.
              <br />
              לא רציתי להיות רזה וממורמרת — רציתי להיות יפה וחופשייה.
            </p>
          </motion.div>

          {story2.map((s, i) => (
            <motion.p
              key={`b${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.9 }}
              style={{ fontSize: '0.97rem', color: 'var(--text-brown)', lineHeight: 1.85 }}
            >
              {s.text}
            </motion.p>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: 32,
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            textAlign: 'center',
          }}
        >
          "וזה בדיוק השקט שאני רוצה להעביר לך."
        </motion.p>

      </div>
    </section>
  );
}
