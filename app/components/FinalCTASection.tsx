'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
export default function FinalCTASection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) { setError('נא למלא מספר טלפון'); return; }
    setSubmitting(true);

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email }),
    }).catch(() => {});

    const msg = encodeURIComponent('היי שנהב! אני רוצה לבדוק אם התהליך מתאים לי');
    window.open(`https://wa.me/972506409478?text=${msg}`, '_blank');
    setSubmitting(false);
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.65)',
    border: '1.5px solid rgba(196,112,74,0.3)',
    color: 'var(--text-dark)',
    fontSize: 16,
    fontFamily: 'Heebo, sans-serif',
    direction: 'rtl',
    borderRadius: 14,
    padding: '14px 18px',
    width: '100%',
    outline: 'none',
  };

  return (
    <section style={{
      background: 'var(--bg-taupe)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Warm glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '80vw',
        maxWidth: 600,
        maxHeight: 600,
        background: 'radial-gradient(ellipse, rgba(196,112,74,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

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
          אז אם הגעת עד לפה...
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
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            marginBottom: 16,
          }}
        >
          <span style={{ color: 'var(--copper-light)' }}>להגשת מועמדות</span>
          <br />
          לתוכנית הליווי הקבוצתית
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="copper-divider"
          style={{ marginBottom: 20 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: '1rem',
            color: 'var(--text-medium)',
            lineHeight: 1.8,
            marginBottom: 36,
          }}
        >
          לאחר מילוי הפרטים אני חוזרת אלייך לשיחה קלילה
          <br />
          <strong style={{ color: 'var(--text-dark)' }}>בחינם וללא התחייבות</strong>{' '}
          כדי לבדוק אם התהליך מתאים לך בשלב הזה.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            background: 'rgba(255,255,255,0.5)',
            border: '1.5px solid rgba(196,112,74,0.25)',
            borderRadius: 24,
            padding: '32px 28px',
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: 'block', textAlign: 'right', marginBottom: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-medium)' }}>
                שם מלא
              </label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', textAlign: 'right', marginBottom: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-medium)' }}>
                טלפון
              </label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="" style={{ ...inputStyle, direction: 'ltr', textAlign: 'right' }} />
            </div>
            <div>
              <label style={{ display: 'block', textAlign: 'right', marginBottom: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-medium)' }}>
                מייל
              </label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="" style={{ ...inputStyle, direction: 'ltr', textAlign: 'right' }} />
            </div>
          </div>

          {error && <p style={{ color: '#F87171', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>{error}</p>}

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: '100%',
              padding: '17px 24px',
              borderRadius: 9999,
              border: 'none',
              cursor: submitting ? 'wait' : 'pointer',
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 700,
              fontSize: 17,
              color: '#FFFFFF',
              background: submitting
                ? 'rgba(196,112,74,0.5)'
                : 'linear-gradient(135deg, var(--copper-light) 0%, var(--copper) 50%, var(--copper-dark) 100%)',
              boxShadow: '0 8px 28px rgba(196,112,74,0.35)',
            }}
          >
            {submitting ? 'שולח...' : 'אני רוצה לבדוק שהתהליך מתאים לי ←'}
          </motion.button>

          {/* WA indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14 }}>
            <div style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-medium)' }}>תישלח ישירות לוואטסאפ שלי</p>
          </div>
        </motion.form>

        {/* Closing quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontSize: '0.93rem', fontStyle: 'italic', color: 'var(--text-medium)', marginBottom: 36 }}
        >
          "כי ברגע שהראש משתחרר — הגוף מפסיק לאגור את מה שהוא לא צריך."
        </motion.p>


      </div>
    </section>
  );
}
