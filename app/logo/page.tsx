'use client';

import { useState } from 'react';

/* ─── Tokens ─── */
const C = {
  bg:             '#1C1008',
  bgLight:        '#FAF6F1',
  page:           '#080402',
  copper:         '#C4704A',
  copperLight:    '#D98B65',
  text:           '#F5EDE4',
  textDark:       '#1A0D07',
  textMuted:      '#C4A882',
  textMutedDark:  '#8B6040',
  dim:            '#443020',
} as const;

type Variant = 'dark' | 'light' | 'watermark';

/* ══════════════════════════════════════════
   SVG LOGO COMPONENT
   Crescent: right-opening ☽ (outer r=18, inner r=14 shifted +8 right)
   Proportions: 380 × 148
══════════════════════════════════════════ */
function LogoSVG({ variant, id }: { variant: Variant; id: string }) {
  const isDark      = variant === 'dark' || variant === 'watermark';
  const hasBg       = variant !== 'watermark';
  const bgFill      = variant === 'dark' ? C.bg : C.bgLight;
  const mainColor   = isDark ? C.text      : C.textDark;
  const subColor    = isDark ? C.textMuted : C.textMutedDark;
  const maskId      = `cm-${id}`;

  return (
    <svg
      id={id}
      viewBox="0 0 380 148"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block' }}
    >
      {/* Background (omitted for watermark variant) */}
      {hasBg && <rect width="380" height="148" fill={bgFill} />}

      {/* ── Crescent moon ─────────────────────────────
          Right-opening ☽: outer circle minus inner circle shifted right
      ─────────────────────────────────────────────── */}
      <defs>
        <mask id={maskId}>
          <circle cx="190" cy="26" r="18" fill="white" />
          {/* Inner circle shifted right → creates opening on right */}
          <circle cx="198" cy="26" r="14" fill="black" />
        </mask>
      </defs>
      <circle cx="190" cy="26" r="18" fill={C.copper} mask={`url(#${maskId})`} />

      {/* ── Main name ─────────────────────────────── */}
      <text
        x="190"
        y="79"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', 'Frank Ruhl Libre', Georgia, serif"
        fontSize="40"
        fontWeight="500"
        fill={mainColor}
        style={{ direction: 'rtl' }}
      >
        שנהב בנימין
      </text>

      {/* ── Copper hairline ───────────────────────── */}
      <rect
        x="142" y="90"
        width="96" height="0.9"
        fill={C.copper} opacity="0.85"
        rx="0.4"
      />

      {/* ── Subtitle ──────────────────────────────── */}
      <text
        x="190"
        y="116"
        textAnchor="middle"
        fontFamily="'Heebo', sans-serif"
        fontSize="12"
        fontWeight="300"
        letterSpacing="5"
        fill={subColor}
        style={{ direction: 'rtl' }}
      >
        תזונה ותודעה
      </text>
    </svg>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
const VARIANTS: { key: Variant; label: string }[] = [
  { key: 'dark',      label: 'כהה'     },
  { key: 'light',     label: 'בהיר'    },
  { key: 'watermark', label: 'ווטרמארק' },
];

const PREVIEW_BG: Record<Variant, string> = {
  dark:      C.bg,
  light:     C.bgLight,
  watermark: '#2A1408',
};

const BTN_BASE: React.CSSProperties = {
  border:      `1px solid ${C.copper}`,
  borderRadius: '2px',
  padding:     '6px 18px',
  fontSize:    '13px',
  cursor:      'pointer',
  fontFamily:  "'Heebo', sans-serif",
  transition:  'all 0.2s',
};

export default function LogoPage() {
  const [active, setActive] = useState<Variant>('dark');

  return (
    <main style={{
      minHeight:      '100vh',
      background:     C.page,
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '40px 20px',
      fontFamily:     "'Heebo', sans-serif",
      gap:            '28px',
      direction:      'rtl',
    }}>

      {/* Title */}
      <p style={{
        fontSize:      '11px',
        letterSpacing: '0.25em',
        color:         C.dim,
        fontWeight:    700,
        textAlign:     'center',
      }}>
        LOGO | שנהב בנימין
      </p>

      {/* Variant toggle */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {VARIANTS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              ...BTN_BASE,
              background: key === active ? C.copper   : 'transparent',
              color:      key === active ? '#fff'     : C.copper,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Logo preview */}
      <div style={{
        width:          '100%',
        maxWidth:       '460px',
        background:     PREVIEW_BG[active],
        borderRadius:   '3px',
        padding:        '44px 48px',
        boxShadow:      '0 28px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(196,112,74,0.12)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
      }}>
        <LogoSVG variant={active} id={`logo-${active}`} />
      </div>

      {/* Watermark scale preview */}
      {active === 'watermark' && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: C.dim, fontSize: '12px', marginBottom: '14px', letterSpacing: '0.05em' }}>
            תצוגה מקדימה בגדל ווטרמארק
          </p>
          <div style={{
            background:     '#1C1008',
            borderRadius:   '3px',
            padding:        '20px',
            display:        'inline-block',
            boxShadow:      '0 8px 30px rgba(0,0,0,0.5)',
          }}>
            <div style={{ width: '160px' }}>
              <LogoSVG variant="watermark" id="logo-watermark-sm" />
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div style={{
        border:       `1px solid ${C.copper}20`,
        borderRadius: '3px',
        padding:      '18px 24px',
        maxWidth:     '380px',
        width:        '100%',
      }}>
        <p style={{ color: C.dim, fontSize: '12px', lineHeight: 1.9, textAlign: 'center' }}>
          <span style={{ color: C.copper, fontWeight: 600 }}>כהה</span> — על פוסטים ורקעים כהים<br />
          <span style={{ color: C.copper, fontWeight: 600 }}>בהיר</span> — להדפסה ורקעים בהירים<br />
          <span style={{ color: C.copper, fontWeight: 600 }}>ווטרמארק</span> — גרור ישירות על תוכן<br />
          <br />
          לשמירה: צלמי מסך את אזור הלוגו
        </p>
      </div>

    </main>
  );
}
