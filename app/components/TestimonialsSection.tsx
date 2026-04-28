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
      { text: 'בוקר טוב! היה סוף"ש מעולה, אני מרגישה ' },
      { text: 'מאוזנת', highlight: true },
      { text: ', אין כבדות. יש לי עניין שמטרגר אותי בסופי שבוע תמיד ואני מרגישה שאני ' },
      { text: 'מתגברת עליו', highlight: true },
      { text: ' וזה מטורף 🙏' },
    ],
  },
  {
    time: '18:04', name: 'שירה',
    segments: [
      { text: 'את פשוט ' },
      { text: 'ההצלה שלי בחיים', highlight: true },
      { text: ' 💗 אף פעם לא עשיתי עבודה כזו על המשקל, תמיד היה זה תפריט ותהליך. ' },
      { text: 'שמחה שאני איתך בליווי', highlight: true },
    ],
  },
  {
    time: '8:43', name: 'דנה',
    segments: [
      { text: 'מרגישה מעולה ואפילו יותר מזה, כולם מסביבי מתוסכלות על המשקל ואני ' },
      { text: 'ממשיכה לרדת', highlight: true },
      { text: ' ומאד ' },
      { text: 'ממוקדת', highlight: true },
      { text: '. איך אומרים — בלי דרמה 😊' },
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
  {
    time: '10:01', name: 'נועה',
    segments: [
      { text: 'את גורמת לי ' },
      { text: 'להסתכל על התמונה הגדולה', highlight: true },
      { text: ' ולא על השטויות שהייתי תקועה בהן. אני אוהבת אותך ואת התהליך הזה 🙏' },
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
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper-light)', marginBottom: 16 }}
        >
          אפשר לראות את התוצאות בלייב
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 900, color: '#F5EDE4', lineHeight: 1.25, marginBottom: 20 }}
        >
          מה אומרות הנשים
          <br />
          <span style={{ color: 'var(--copper-light)' }}>שכבר עברו את התהליך</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 44 }}
        />

        {/* Proof images masonry */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ columns: '3 180px', columnGap: 14 }}
        >
          {proofImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 + 0.2 }}
              whileHover={{ scale: 1.02, zIndex: 2 }}
              style={{
                breakInside: 'avoid',
                marginBottom: 14,
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid rgba(196,112,74,0.25)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                background: '#111',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <Image
                src={src}
                alt={`הוכחה חברתית ${i + 1}`}
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
