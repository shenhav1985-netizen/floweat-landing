'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const WA_URL = `https://wa.me/972506409478?text=${encodeURIComponent('היי שנהב, אני רוצה לבדוק אם התהליך מתאים לי')}`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay },
});

export default function HeroSection() {
  return (
    <section style={{
      background: 'linear-gradient(155deg, #FAF6F1 0%, #F4EDE3 55%, #EDE0CE 100%)',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Warm radial glow */}
      <div style={{
        position: 'absolute', top: '15%', right: '-8%',
        width: '60vw', maxWidth: 520, height: '60vw', maxHeight: 520,
        background: 'radial-gradient(ellipse, rgba(196,112,74,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%',
        width: '45vw', maxWidth: 380, height: '45vw', maxHeight: 380,
        background: 'radial-gradient(ellipse, rgba(143,168,136,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Main layout */}
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: '72px 28px 60px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="hero-layout"
      >
        {/* ── TEXT COLUMN ── */}
        <div style={{ textAlign: 'center' }} className="hero-text">

          {/* Top line */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.4), transparent)',
              marginBottom: 28,
            }}
          />

          {/* ★ HOOK */}
          <motion.div {...fadeUp(0)} style={{ marginBottom: 28 }}>
            {/* כאב */}
            <p style={{
              fontSize: 'clamp(1rem, 2.4vw, 1.2rem)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.85,
              marginBottom: 20,
            }}>
              המאבק עם האוכל הוא אחד הדברים הכי מתישים שיש.
              <br />
              לא כי הוא קשה פיזית.
              <br />
              כי הוא לא נגמר.
            </p>
            <p style={{
              fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
              fontWeight: 400,
              color: 'var(--text-medium)',
              lineHeight: 2,
              marginBottom: 24,
            }}>
              בוקר, צהריים, ערב, לילה.
              <br />
              כל ארוחה היא החלטה.
              <br />
              כל החלטה היא מאמץ.
              <br />
              וכל נפילה היא אכזבה.
            </p>

            {/* קו הפרדה */}
            <div style={{
              width: 40,
              height: 1,
              background: 'rgba(196,112,74,0.35)',
              margin: '0 auto 24px',
            }} />

            {/* פתרון */}
            <p style={{
              fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
              fontWeight: 400,
              color: 'var(--text-medium)',
              lineHeight: 2,
              marginBottom: 8,
            }}>
              יש נשים שלא חושבות על אוכל כל היום.
              <br />
              שאוכלות ועוברות הלאה.
              <br />
              בלי חרטה. בלי חשבון. בלי הקול הזה בראש.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2.3vw, 1.15rem)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.7,
            }}>
              את רוצה להיות אחת מהן וזה אפשרי!
              <br />
              זה בדיוק מה שאנחנו עושות כאן.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="copper-divider"
            style={{ marginBottom: 24 }}
          />

          {/* Brand name */}
          <motion.div {...fadeUp(0.2)} style={{ padding: '0 8px', marginBottom: 10 }}>
            <span style={{
              display: 'block',
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 8vw, 5.5rem)',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #A05A36 0%, #C4704A 35%, #E8A070 60%, #C4704A 80%, #8B3D1E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              מעדכנות גרסה
            </span>
          </motion.div>

          {/* by שנהב */}
          <motion.div {...fadeIn(0.38)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 14, marginBottom: 28,
          }}>
            <span style={{ flex: 1, height: 1, background: 'rgba(196,112,74,0.22)' }} />
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.28em',
              color: 'var(--copper)', textTransform: 'uppercase', whiteSpace: 'nowrap',
            }}>
              by שנהב בנימין
            </span>
            <span style={{ flex: 1, height: 1, background: 'rgba(196,112,74,0.22)' }} />
          </motion.div>

          {/* Main promise */}
          <motion.h1 {...fadeUp(0.5)} style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.85rem)',
            color: 'var(--text-dark)',
            lineHeight: 1.5,
            fontWeight: 900,
            marginBottom: 14,
          }}>
            10 שבועות שמנתקים את התלות באוכל מהשורש
            <br />
            <span style={{ color: 'var(--copper)', fontWeight: 700 }}>
              ויוצאים מהלופ של דיאטות, לתמיד.
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.62)} style={{
            fontSize: 'clamp(0.92rem, 2.1vw, 1.05rem)',
            color: 'var(--text-medium)',
            lineHeight: 1.8,
            marginBottom: 10,
          }}>
            בעזרת שיטה שמשלבת תזונה איכותית יחד עם תודעת שחרור
          </motion.p>

          <motion.p {...fadeIn(0.72)} style={{
            fontSize: '0.97rem',
            color: 'var(--copper)',
            marginBottom: 28,
            fontWeight: 600,
          }}>
            נשים שעברו את התהליך ירדו בממוצע 8-12 קילו — בלי דיאטה, בלי ספירת קלוריות, ובלי לחזור אחורה.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.85)}>
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              אני רוצה לבדוק שהתהליך מתאים לי ←
            </motion.a>
          </motion.div>

          <motion.p {...fadeIn(1.0)} style={{
            marginTop: 12, fontSize: 13, color: 'var(--text-light)', letterSpacing: '0.02em',
          }}>
            ✓ בחינם וללא התחייבות
          </motion.p>

          {/* Bottom line */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            style={{
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.35), transparent)',
              marginTop: 36,
            }}
          />
        </div>

        {/* ── IMAGE COLUMN ── */}
        <motion.div
          className="hero-image-col"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          {/* Decorative copper ring */}
          <div style={{
            position: 'absolute', bottom: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: '88%', maxWidth: 340, height: '88%',
            borderRadius: '50% 50% 48% 48%',
            border: '1.5px solid rgba(196,112,74,0.25)',
            background: 'radial-gradient(ellipse at bottom, rgba(196,112,74,0.08) 0%, transparent 70%)',
            zIndex: 0,
          }} />

          {/* Corner accents */}
          <div style={{
            position: 'absolute', top: '12%', right: '8%',
            width: 48, height: 48,
            borderTop: '2px solid rgba(196,112,74,0.45)',
            borderRight: '2px solid rgba(196,112,74,0.45)',
            borderRadius: '0 8px 0 0', zIndex: 2,
          }} />
          <div style={{
            position: 'absolute', bottom: '8%', left: '8%',
            width: 48, height: 48,
            borderBottom: '2px solid rgba(196,112,74,0.45)',
            borderLeft: '2px solid rgba(196,112,74,0.45)',
            borderRadius: '0 0 0 8px', zIndex: 2,
          }} />

          {/* Image */}
          <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 380 }}>
            <Image
              src="/images/hero2.png"
              alt="שנהב בנימין"
              width={380}
              height={520}
              priority
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'top',
                filter: 'drop-shadow(0 12px 40px rgba(196,112,74,0.18))',
                display: 'block',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          color: 'var(--copper)', fontSize: 20,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >↓</motion.div>

      <style>{`
        @media (min-width: 860px) {
          .hero-layout {
            grid-template-columns: 1fr 400px !important;
            direction: rtl;
          }
          .hero-text {
            text-align: right !important;
          }
          .hero-text .copper-divider,
          .hero-text .gold-divider {
            margin-right: 0 !important;
            margin-left: auto !important;
          }
        }
        @media (max-width: 859px) {
          .hero-image-col {
            max-height: 360px;
            overflow: hidden;
            align-items: flex-start !important;
          }
          .hero-layout {
            padding-top: max(100px, calc(env(safe-area-inset-top, 0px) + 80px)) !important;
          }
        }
      `}</style>
    </section>
  );
}
