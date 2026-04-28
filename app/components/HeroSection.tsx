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
      background: 'var(--bg-dark)',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '55vw', maxWidth: 500, height: '55vw', maxHeight: 500,
        background: 'radial-gradient(ellipse, rgba(196,112,74,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: '40vw', maxWidth: 360, height: '40vw', maxHeight: 360,
        background: 'radial-gradient(ellipse, rgba(143,168,136,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Main container — two columns on desktop */}
      <div style={{
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

          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.5), transparent)',
              marginBottom: 28,
            }}
          />

          {/* FLOWEAT */}
          <motion.div {...fadeUp(0.1)} style={{ padding: '0 8px' }}>
            <span style={{
              display: 'block',
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 9vw, 6.5rem)',
              letterSpacing: '0.12em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #E8B89A 0%, #C4704A 35%, #D98B65 65%, #E8C4A8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
            }}>
              floweat
            </span>
          </motion.div>

          {/* by שנהב */}
          <motion.div {...fadeIn(0.35)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 14, marginTop: 10, marginBottom: 26,
          }}>
            <span style={{ flex: 1, height: 1, background: 'rgba(196,112,74,0.25)' }} />
            <span style={{
              fontSize: 12, fontWeight: 500, letterSpacing: '0.28em',
              color: 'var(--copper-light)', textTransform: 'uppercase', whiteSpace: 'nowrap',
            }}>
              by שנהב בנימין
            </span>
            <span style={{ flex: 1, height: 1, background: 'rgba(196,112,74,0.25)' }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p {...fadeUp(0.45)} style={{
            fontSize: 'clamp(0.95rem, 2.3vw, 1.1rem)',
            color: '#A89080', lineHeight: 1.75, marginBottom: 18,
          }}>
            התחנה הסופית לנשים שעייפות ממאבק בירידה במשקל
            <br />ורוצות לבנות אורח חיים יציב בראש שקט
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="copper-divider" style={{ marginBottom: 22 }}
          />

          {/* H1 */}
          <motion.h1 {...fadeUp(0.65)} style={{
            fontSize: 'clamp(1.05rem, 2.6vw, 1.5rem)',
            color: '#F0E8DF', lineHeight: 1.65, fontWeight: 700, marginBottom: 12,
          }}>
            תוך 10 שבועות אנחנו מנתקות מהשורש את התלות באוכל
            {' '}עד שאת יוצאת מהלופ של דיאטות ומאבק במשקל
            {' '}ומעניקה לעצמך שגרת תזונה חופשית ויציבה שעובדת מבפנים
            {' '}ומחזירה לך סדר, קלילות ושקט.{' '}
            <span style={{ color: 'var(--copper-light)' }}>
              בעזרת שיטה מנטלית לשחרור דפוסי מחשבה שעבדה לאלפי נשים.
            </span>
          </motion.h1>

          <motion.p {...fadeIn(0.8)} style={{
            fontSize: '1rem', color: '#6B4535', marginBottom: 32, fontStyle: 'italic',
          }}>
            מזינות את הגוף והראש, בלי להישחק ובלי להתחיל מחדש כל שבוע
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.9)}>
            <motion.a
              href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="cta-btn"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            >
              אני רוצה לבדוק שהתהליך מתאים לי ←
            </motion.a>
          </motion.div>

          <motion.p {...fadeIn(1.05)} style={{
            marginTop: 12, fontSize: 13, color: '#4A3028', letterSpacing: '0.02em',
          }}>
            ✓&nbsp; בחינם וללא התחייבות
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            style={{
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(196,112,74,0.4), transparent)',
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
          {/* Decorative copper ring behind image */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '88%',
            maxWidth: 340,
            height: '88%',
            borderRadius: '50% 50% 48% 48%',
            border: '1.5px solid rgba(196,112,74,0.2)',
            background: 'radial-gradient(ellipse at bottom, rgba(196,112,74,0.07) 0%, transparent 70%)',
            zIndex: 0,
          }} />

          {/* Corner accent lines */}
          <div style={{
            position: 'absolute', top: '12%', right: '8%',
            width: 48, height: 48,
            borderTop: '2px solid rgba(196,112,74,0.4)',
            borderRight: '2px solid rgba(196,112,74,0.4)',
            borderRadius: '0 8px 0 0',
            zIndex: 2,
          }} />
          <div style={{
            position: 'absolute', bottom: '8%', left: '8%',
            width: 48, height: 48,
            borderBottom: '2px solid rgba(196,112,74,0.4)',
            borderLeft: '2px solid rgba(196,112,74,0.4)',
            borderRadius: '0 0 0 8px',
            zIndex: 2,
          }} />

          {/* The image */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 380,
          }}>
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
                filter: 'drop-shadow(0 12px 40px rgba(196,112,74,0.2))',
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
            max-height: 380px;
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
