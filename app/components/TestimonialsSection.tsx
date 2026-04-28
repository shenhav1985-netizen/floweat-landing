'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Segment = { text: string; highlight?: boolean };

const bubbles: { segments: Segment[]; time: string; name: string }[] = [
  {
    time: '10:31', name: 'מיכל',
    segments: [
      { text: 'הייתה לי שבת מאד טובה וגם בשישי שלבתי דברים שאני אוהבת ואני מאד ' },
      { text: 'גאה בעצמי', highlight: true },
      { text: ' שאני אוכלת ' },
      { text: 'בלי ספירת קלוריות', highlight: true },
      { text: ' וכל המחשבות המעייפות' },
    ],
  },
  {
    time: '8:54', name: 'רחל',
    segments: [
      { text: 'בוקר טוב היה סוף"ש מעולה אני מרגישה ' },
      { text: 'מאוזנת', highlight: true },
      { text: ' אין כבדות. יש לי עניין שמטרגר אותי בסופי שבוע תמיד ואני מרגישה שאני ' },
      { text: 'מתגברת עליו', highlight: true },
      { text: ' וזה מטורף' },
    ],
  },
  {
    time: '18:04', name: 'שירה',
    segments: [
      { text: 'את פשוט ' },
      { text: 'ההצלה שלי בחיים', highlight: true },
      { text: ' 💗 אף פעם לא עשיתי עבודה כזו על המשקל תמיד היה זה תפריט ותהליך ' },
      { text: 'שמחה שאני איתך בליווי', highlight: true },
    ],
  },
  {
    time: '8:43', name: 'דנה',
    segments: [
      { text: 'מרגישה מעולה ואפילו יותר מזה כולם מסביבי מתוסכלות על המשקל ואני ' },
      { text: 'ממשיכה לרדת', highlight: true },
      { text: ' ומאד ' },
      { text: 'ממוקדת', highlight: true },
      { text: ' איך אומרת בלי דרמה 😊' },
    ],
  },
  {
    time: '10:01', name: 'נועה',
    segments: [
      { text: 'את גורמת לי ' },
      { text: 'להסתכל על התמונה הגדולה', highlight: true },
      { text: ' מאשר על השטויות שאני מתעסקת בהם. אני אוהבת אותך ואת התהליך הזה 🙏' },
    ],
  },
  {
    time: '14:22', name: 'ליאת',
    segments: [
      { text: 'שנהב אני חייבת לספר לך — ' },
      { text: 'ירדתי 4 קילו בחודש הראשון', highlight: true },
      { text: ' ובלי להרגיש שאני על דיאטה! פשוט ' },
      { text: 'אוכלת נורמלי', highlight: true },
      { text: ' ומרגישה קלה 🙌' },
    ],
  },
  {
    time: '9:15', name: 'יעל',
    segments: [
      { text: 'הבנתי סוף סוף למה אני אוכלת בלילה. זה לא כוח רצון — זה ' },
      { text: 'טריגר רגשי ספציפי', highlight: true },
      { text: ' שאני יודעת עכשיו לזהות ו' },
      { text: 'לנטרל אותו', highlight: true },
      { text: '. תודה רבה ❤️' },
    ],
  },
];

function BubbleText({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((seg, i) =>
        seg.highlight ? (
          <span key={i} style={{
            textDecoration: 'underline',
            textDecorationColor: '#E53E3E',
            textDecorationThickness: '2px',
            textUnderlineOffset: '3px',
            fontWeight: 700,
          }}>
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

const proofImages = [
  '/הוכחה חברתית 1.PNG',
  '/הוכחה חברתית 2.PNG',
  '/הוכחה חברתית 3.PNG',
  '/הוכחה חברתית 4.PNG',
  '/הוכחה חברתית 5.PNG',
  '/הוכחה חברתית 6.PNG',
  '/הוכחה חברתית 7.PNG',
  '/הוכחה חברתית 9.PNG',
  '/הוכחה חברתית 10.PNG',
  '/הוכחה חברתית 11.PNG',
  '/הוכחה חברתית 12.PNG',
];

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#1C1008', padding: '96px 24px' }}>
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
            color: 'var(--copper-light)',
            marginBottom: 16,
          }}
        >
          אפשר לראות את התוצאות בלייב
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
            color: '#F5EDE4',
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          מה אומרות הנשים
          <br />
          <span style={{ color: 'var(--copper-light)' }}>שכבר עברו את התהליך</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 44 }}
        />

        {/* WhatsApp chat */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            marginBottom: 56,
          }}
        >
          {/* WA header */}
          <div style={{
            background: '#128C7E',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 18px',
          }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--copper)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: '#FFF',
              fontSize: 15,
              flexShrink: 0,
            }}>ש</div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#FFF', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>שנהב בנימין | floweat</p>
              <p style={{ color: '#A8D5B8', fontSize: 12 }}>קבוצת הליווי</p>
            </div>
          </div>

          {/* Bubbles */}
          <div style={{ background: '#0D0906', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {bubbles.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 + 0.35 }}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <div style={{ maxWidth: '85%', textAlign: 'right' }}>
                  <p style={{ fontSize: 11, color: 'var(--copper-light)', marginBottom: 3, paddingRight: 4 }}>{b.name}</p>
                  <div className="wa-bubble">
                    <p style={{ direction: 'rtl' }}><BubbleText segments={b.segments} /></p>
                    <div className="time">{b.time} ✓✓</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social proof heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--copper-light)',
            marginBottom: 24,
          }}
        >
          הוכחות מהשטח
        </motion.p>

        {/* Social proof images grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 12,
        }}>
          {proofImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 + 0.2 }}
              style={{
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(196,112,74,0.2)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                background: '#111',
              }}
            >
              <Image
                src={src}
                alt={`הוכחה חברתית ${i + 1}`}
                width={300}
                height={300}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                unoptimized
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
