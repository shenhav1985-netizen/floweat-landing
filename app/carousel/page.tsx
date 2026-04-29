'use client';

import { useState, useEffect, useCallback } from 'react';

/* ─── Design tokens ─── */
const C = {
  bg:          '#0F0804',
  dark:        '#1C1008',
  dark2:       '#150D06',
  dark3:       '#1A0E06',
  copper:      '#C4704A',
  copperLight: '#D98B65',
  copperDark:  '#A05A36',
  text:        '#F5EDE4',
  textMuted:   '#C4A882',
  textDim:     '#7A5A42',
} as const;

/* ─── Shared slide wrapper ─── */
const base: React.CSSProperties = {
  position:       'absolute',
  inset:          0,
  display:        'flex',
  flexDirection:  'column',
  alignItems:     'center',
  justifyContent: 'center',
  padding:        '44px 40px',
  direction:      'rtl',
  fontFamily:     "'Heebo', sans-serif",
  overflow:       'hidden',
};

/* ─── Shared sub-components ─── */
function CopperLine({ w = '52px', mv = '22px' }: { w?: string; mv?: string }) {
  return (
    <div style={{
      width:      w,
      height:     '1.5px',
      background: `linear-gradient(90deg, transparent, ${C.copper}, transparent)`,
      margin:     `${mv} auto`,
      flexShrink: 0,
    }} />
  );
}

function Brand({ dim = false }: { dim?: boolean }) {
  return (
    <div style={{
      fontSize:      '11px',
      fontWeight:    700,
      letterSpacing: '0.28em',
      color:         dim ? C.textDim : C.copper,
    }}>
      FLOWEAT
    </div>
  );
}

/* ══════════════════════════════════════════
   SLIDE 1 – HOOK
══════════════════════════════════════════ */
function Slide1() {
  return (
    <div style={{ ...base, background: C.bg, justifyContent: 'space-between', paddingTop: '36px', paddingBottom: '36px' }}>
      {/* Glow blob */}
      <div style={{
        position:     'absolute',
        top:          '-10%',
        right:        '-10%',
        width:        '260px',
        height:       '260px',
        borderRadius: '50%',
        background:   `radial-gradient(circle, ${C.copper}18 0%, transparent 70%)`,
        pointerEvents:'none',
      }} />

      {/* Top bar */}
      <div style={{ alignSelf: 'flex-end', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Brand />
        <div style={{ width: '28px', height: '1.5px', background: C.copper }} />
      </div>

      {/* Main */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: C.textDim, letterSpacing: '0.08em', marginBottom: '22px', fontWeight: 400 }}>
          שאלי את עצמך בכנות
        </p>
        <h1 style={{
          fontSize:   'clamp(38px, 9vw, 62px)',
          fontWeight: 900,
          color:      C.text,
          lineHeight: 1.15,
          margin:     0,
        }}>
          כמה פעמים<br />
          ירדת במשקל<br />
          ועלית שוב?
        </h1>
        <CopperLine w="48px" mv="26px" />
        <p style={{ fontSize: '15px', color: C.textMuted, fontWeight: 400, lineHeight: 1.75 }}>
          אם משהו בך נע כשקראת את זה,<br />
          <span style={{ color: C.copperLight, fontWeight: 600 }}>המשיכי לקרוא.</span>
        </p>
      </div>

      {/* Swipe hint */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: C.textDim, fontSize: '13px' }}>
        <span>החליקי</span>
        <span style={{ color: C.copper, fontSize: '15px' }}>◀</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   SLIDE 2 – PAIN
══════════════════════════════════════════ */
function Slide2() {
  return (
    <div style={{ ...base, background: C.dark, textAlign: 'right', alignItems: 'flex-start' }}>
      {/* Subtle line texture left side */}
      <div style={{
        position:    'absolute',
        left:        0,
        top:         0,
        bottom:      0,
        width:       '3px',
        background:  `linear-gradient(180deg, transparent, ${C.copper}60, transparent)`,
        pointerEvents:'none',
      }} />

      {/* Tag */}
      <div style={{
        display:       'inline-flex',
        alignItems:    'center',
        gap:           '8px',
        padding:       '5px 14px',
        border:        `1px solid ${C.copper}35`,
        borderRadius:  '2px',
        marginBottom:  '28px',
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.copper }} />
        <span style={{ fontSize: '12px', color: C.copper, letterSpacing: '0.1em', fontWeight: 600 }}>
          את לא לבד בזה
        </span>
      </div>

      {/* Text */}
      <h2 style={{
        fontSize:   'clamp(26px, 6vw, 40px)',
        fontWeight: 800,
        color:      C.text,
        lineHeight: 1.3,
        margin:     '0 0 20px',
      }}>
        את יודעת<br />
        מה לאכול.
      </h2>

      <p style={{
        fontSize:   'clamp(18px, 4vw, 26px)',
        fontWeight: 500,
        color:      C.textMuted,
        lineHeight: 1.55,
        margin:     '0 0 28px',
      }}>
        אבל בסוף היום,<br />
        הידיים מגיעות לאוכל<br />
        לבד. שוב.
      </p>

      <CopperLine w="36px" mv="0" />

      <p style={{
        fontSize:   '16px',
        color:      C.text,
        fontWeight: 700,
        marginTop:  '22px',
        letterSpacing: '0.02em',
      }}>
        זה לא חוסר כוח רצון.
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════
   SLIDE 3 – REFRAME
══════════════════════════════════════════ */
function Slide3() {
  return (
    <div style={{ ...base, background: C.dark2 }}>
      {/* Corner ornament */}
      <div style={{
        position:     'absolute',
        top:          '28px',
        left:         '28px',
        width:        '32px',
        height:       '32px',
        borderTop:    `1.5px solid ${C.copper}50`,
        borderRight:  `1.5px solid ${C.copper}50`,
        pointerEvents:'none',
      }} />
      <div style={{
        position:      'absolute',
        bottom:        '28px',
        right:         '28px',
        width:         '32px',
        height:        '32px',
        borderBottom:  `1.5px solid ${C.copper}50`,
        borderLeft:    `1.5px solid ${C.copper}50`,
        pointerEvents: 'none',
      }} />

      <p style={{
        fontSize:      '12px',
        fontWeight:    700,
        letterSpacing: '0.2em',
        color:         C.textDim,
        marginBottom:  '28px',
        textAlign:     'center',
      }}>
        הבעיה האמיתית
      </p>

      <h2 style={{
        fontSize:   'clamp(34px, 8vw, 54px)',
        fontWeight: 900,
        color:      C.text,
        lineHeight: 1.2,
        textAlign:  'center',
        margin:     '0 0 28px',
      }}>
        הבעיה<br />
        לא נמצאת<br />
        בצלחת שלך.
      </h2>

      <CopperLine w="56px" mv="0" />

      <p style={{
        fontSize:   'clamp(17px, 3.8vw, 23px)',
        color:      C.textMuted,
        fontWeight: 500,
        lineHeight: 1.7,
        textAlign:  'center',
        marginTop:  '26px',
      }}>
        היא נמצאת בדפוסים<br />
        שנוצרו{' '}
        <span style={{ color: C.copperLight, fontWeight: 700 }}>הרבה לפני</span>
        <br />
        שהחלטת להתחיל דיאטה.
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════
   SLIDE 4 – REVELATION (hero slide)
══════════════════════════════════════════ */
function Slide4() {
  return (
    <div style={{ ...base, background: C.bg }}>
      {/* Radial copper glow */}
      <div style={{
        position:     'absolute',
        inset:        0,
        background:   `radial-gradient(ellipse 70% 60% at 50% 55%, ${C.copper}22 0%, transparent 70%)`,
        pointerEvents:'none',
      }} />

      {/* Top line ornament */}
      <div style={{
        position:    'absolute',
        top:         0,
        left:        '50%',
        transform:   'translateX(-50%)',
        width:       '80px',
        height:      '3px',
        background:  C.copper,
        borderRadius:'0 0 2px 2px',
      }} />

      {/* Diamond */}
      <div style={{ fontSize: '18px', color: C.copper, marginBottom: '26px', opacity: 0.9 }}>◆</div>

      {/* First part – muted */}
      <h2 style={{
        fontSize:   'clamp(24px, 5.5vw, 38px)',
        fontWeight: 800,
        color:      C.textMuted,
        lineHeight: 1.3,
        textAlign:  'center',
        margin:     0,
      }}>
        התזונה שלך<br />
        לא מסמלת<br />
        רק נראות.
      </h2>

      {/* Solid copper divider */}
      <div style={{
        width:        '72px',
        height:       '2px',
        background:   C.copper,
        margin:       '26px auto',
        flexShrink:   0,
      }} />

      {/* Second part – THE REVELATION */}
      <h1 style={{
        fontSize:      'clamp(38px, 8.5vw, 60px)',
        fontWeight:    900,
        color:         C.text,
        lineHeight:    1.15,
        textAlign:     'center',
        margin:        0,
        letterSpacing: '-0.01em',
      }}>
        תזונה<br />
        זו<br />
        <span style={{ color: C.copperLight }}>איכות חיים.</span>
      </h1>

      {/* Bottom brand */}
      <div style={{ position: 'absolute', bottom: '26px' }}>
        <Brand dim />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   SLIDE 5 – WHAT IT MEANS
══════════════════════════════════════════ */
function Slide5() {
  const items = [
    'אנרגיה שלא נגמרת אחרי הצהריים',
    'שקט מנטלי אמיתי סביב אוכל',
    'גוף שמרגיש בית, לא שדה קרב',
    'חיים בלי לחשוב על כל ביס',
  ];

  return (
    <div style={{ ...base, background: C.dark3, textAlign: 'right', alignItems: 'flex-start' }}>
      {/* Bottom glow */}
      <div style={{
        position:     'absolute',
        bottom:       '-20%',
        left:         '-10%',
        width:        '280px',
        height:       '280px',
        borderRadius: '50%',
        background:   `radial-gradient(circle, ${C.copper}14 0%, transparent 70%)`,
        pointerEvents:'none',
      }} />

      <p style={{
        fontSize:      '13px',
        color:         C.copper,
        fontWeight:    600,
        letterSpacing: '0.06em',
        marginBottom:  '14px',
      }}>
        מה זה אומר בפועל?
      </p>

      <h2 style={{
        fontSize:   'clamp(22px, 5vw, 34px)',
        fontWeight: 800,
        color:      C.text,
        lineHeight: 1.3,
        margin:     '0 0 30px',
      }}>
        תזונה שמשרתת<br />
        אותך מבפנים
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ color: C.copper, fontSize: '14px', flexShrink: 0 }}>✦</span>
            <span style={{
              fontSize:   'clamp(14px, 3.2vw, 18px)',
              color:      C.text,
              fontWeight: 500,
              lineHeight: 1.5,
            }}>
              {item}
            </span>
          </div>
        ))}
      </div>

      <CopperLine w="36px" mv="26px" />

      <p style={{ fontSize: '17px', color: C.copperLight, fontWeight: 700 }}>
        זה מה שאפשרי.
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════
   SLIDE 6 – CTA
══════════════════════════════════════════ */
function Slide6() {
  return (
    <div style={{ ...base, background: C.bg }}>
      {/* Top ornament line */}
      <div style={{
        position:  'absolute',
        top:       0,
        left:      '50%',
        transform: 'translateX(-50%)',
        width:     '80px',
        height:    '3px',
        background:C.copper,
        borderRadius: '0 0 2px 2px',
      }} />

      {/* Brand name */}
      <div style={{
        fontSize:      '32px',
        fontWeight:    900,
        letterSpacing: '0.12em',
        color:         C.text,
        marginBottom:  '4px',
      }}>
        FLOWEAT
      </div>
      <div style={{
        fontSize:      '12px',
        letterSpacing: '0.14em',
        color:         C.textDim,
        marginBottom:  '28px',
      }}>
        תזונה מנטלית | שנהב בנימין
      </div>

      <CopperLine w="44px" mv="0" />

      <p style={{
        fontSize:   'clamp(16px, 3.8vw, 22px)',
        color:      C.text,
        lineHeight: 1.65,
        textAlign:  'center',
        margin:     '26px 0',
        fontWeight: 500,
      }}>
        ליווי קבוצתי לשחרור משקל<br />
        ושינוי תודעתי אמיתי.
      </p>

      {/* Price box */}
      <div style={{
        border:        `1.5px solid ${C.copper}55`,
        borderRadius:  '3px',
        padding:       '11px 28px',
        marginBottom:  '24px',
        background:    `${C.copper}10`,
        textAlign:     'center',
      }}>
        <span style={{ fontSize: '13px', color: C.textMuted }}>מחיר השקה </span>
        <span style={{ fontSize: '24px', fontWeight: 900, color: C.copper }}>2,300 ₪</span>
      </div>

      {/* CTA */}
      <div style={{
        background:    `linear-gradient(135deg, ${C.copperLight} 0%, ${C.copper} 50%, ${C.copperDark} 100%)`,
        borderRadius:  '2px',
        padding:       '14px 38px',
        fontSize:      '16px',
        fontWeight:    700,
        color:         '#fff',
        marginBottom:  '22px',
        letterSpacing: '0.04em',
        boxShadow:     `0 8px 28px ${C.copper}40`,
      }}>
        כתבי לי עכשיו ◀
      </div>

      <div style={{ fontSize: '14px', color: C.textDim, marginBottom: '10px' }}>
        @shenhav_benyamin
      </div>

      <div style={{ fontSize: '13px', color: C.textDim, fontStyle: 'italic' }}>
        באהבה בריאה, שנהב
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE – Carousel shell
══════════════════════════════════════════ */
const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export default function CarouselPage() {
  const [cur, setCur] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(() => setCur(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCur(c => Math.min(total - 1, c + 1)), [total]);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  next();
      if (e.key === 'ArrowRight') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <main style={{
      minHeight:      '100vh',
      background:     '#080402',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '24px 16px',
      fontFamily:     "'Heebo', sans-serif",
      direction:      'rtl',
    }}>
      {/* Slide frame */}
      <div style={{ width: '100%', maxWidth: 'min(520px, 92vw)', position: 'relative' }}>
        <div style={{
          width:        '100%',
          aspectRatio:  '1 / 1',
          position:     'relative',
          overflow:     'hidden',
          borderRadius: '3px',
          boxShadow:    '0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(196,112,74,0.12)',
        }}>
          {SLIDES.map((SlideComp, i) => (
            <div
              key={i}
              style={{
                position:      'absolute',
                inset:         0,
                opacity:       i === cur ? 1 : 0,
                transform:     i === cur ? 'scale(1)' : 'scale(0.98)',
                transition:    'opacity 0.45s ease, transform 0.45s ease',
                pointerEvents: i === cur ? 'auto' : 'none',
              }}
            >
              <SlideComp />
            </div>
          ))}
        </div>

        {/* Navigation row */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          marginTop:      '18px',
        }}>
          {/* Prev (RTL: left = forward) */}
          <NavBtn onClick={next} disabled={cur === total - 1} label="◀" />

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {SLIDES.map((_, i) => (
              <div
                key={i}
                onClick={() => setCur(i)}
                style={{
                  width:        i === cur ? '22px' : '7px',
                  height:       '7px',
                  borderRadius: '4px',
                  background:   i === cur ? C.copper : '#3A2518',
                  cursor:       'pointer',
                  transition:   'all 0.35s ease',
                  flexShrink:   0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <NavBtn onClick={prev} disabled={cur === 0} label="▶" />
        </div>

        {/* Counter */}
        <p style={{
          textAlign:  'center',
          marginTop:  '10px',
          fontSize:   '12px',
          color:      '#443020',
          letterSpacing: '0.05em',
        }}>
          {cur + 1} / {total}
        </p>

        {/* Screenshot tip */}
        <p style={{
          textAlign:  'center',
          marginTop:  '14px',
          fontSize:   '12px',
          color:      '#443020',
          lineHeight: 1.6,
        }}>
          לצילום מסך של כל סליד בנפרד – השתמשי בחלון הדפדפן ❑
        </p>
      </div>
    </main>
  );
}

function NavBtn({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background:    'none',
        border:        `1px solid ${disabled ? '#2A1A10' : C.copper}`,
        color:         disabled ? '#2A1A10' : C.copper,
        width:         '40px',
        height:        '40px',
        borderRadius:  '50%',
        cursor:        disabled ? 'default' : 'pointer',
        fontSize:      '14px',
        display:       'flex',
        alignItems:    'center',
        justifyContent:'center',
        transition:    'all 0.2s',
        flexShrink:    0,
      }}
    >
      {label}
    </button>
  );
}
