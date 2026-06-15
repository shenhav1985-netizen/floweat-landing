'use client';

import { useState, useRef, useEffect } from 'react';
import initialContent from '../../data/site-content.json';

const IMAGES = [
  { key: 'hero',      label: 'תמונה ראשית (הירו)',          path: '/images/hero.jpg',           accept: 'image/*' },
  { key: 'about',     label: 'תמונה עגולה — עלי',           path: '/images/about.jpg',          accept: 'image/*' },
  { key: 'cooking1',  label: 'תמונת בישול — תוכנית',        path: '/images/cooking1.jpg',       accept: 'image/*' },
  { key: 'cooking2',  label: 'תמונת בישול — עלי',           path: '/images/cooking2.jpg',       accept: 'image/*' },
  { key: 'proof1',    label: 'הוכחה חברתית 1',              path: '/images/proof/proof1.png',   accept: 'image/*' },
  { key: 'proof2',    label: 'הוכחה חברתית 2',              path: '/images/proof/proof2.png',   accept: 'image/*' },
  { key: 'proof3',    label: 'הוכחה חברתית 3',              path: '/images/proof/proof3.png',   accept: 'image/*' },
  { key: 'proof4',    label: 'הוכחה חברתית 4',              path: '/images/proof/proof4.png',   accept: 'image/*' },
  { key: 'proof5',    label: 'הוכחה חברתית 5',              path: '/images/proof/proof5.png',   accept: 'image/*' },
  { key: 'proof6',    label: 'הוכחה חברתית 6',              path: '/images/proof/proof6.png',   accept: 'image/*' },
  { key: 'proof7',    label: 'הוכחה חברתית 7',              path: '/images/proof/proof7.png',   accept: 'image/*' },
];

const VIDEOS = [
  { key: 'video1', label: 'סרטון עדות 1', path: '/videos/testimonial1.mp4' },
  { key: 'video2', label: 'סרטון עדות 2', path: '/videos/testimonial2.mp4' },
];

function ImageCard({ item, onRefresh }: { item: typeof IMAGES[0]; onRefresh: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus('uploading');
    setMsg('');
    const form = new FormData();
    form.append('file', file);
    form.append('dest', item.path);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    const data = await res.json();
    if (res.ok) {
      setStatus('done');
      setMsg('הועלה בהצלחה ✓');
      onRefresh();
    } else {
      setStatus('error');
      setMsg(data.error ?? 'שגיאה בהעלאה');
    }
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      border: '1.5px solid #e8ddd4',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}>
      {/* Preview */}
      <div style={{
        width: '100%',
        height: 120,
        background: '#f5f0ea',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${item.path}?t=${Date.now()}`}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { (e.target as HTMLImageElement).style.opacity = '0.2'; }}
        />
      </div>

      <p style={{ fontSize: 14, fontWeight: 700, color: '#3D2B1F', textAlign: 'right' }}>{item.label}</p>
      <p style={{ fontSize: 11, color: '#9A8070', textAlign: 'right', direction: 'ltr' }}>{item.path}</p>

      <input ref={inputRef} type="file" accept={item.accept} onChange={handleFile} style={{ display: 'none' }} />

      <button
        onClick={() => inputRef.current?.click()}
        disabled={status === 'uploading'}
        style={{
          background: status === 'done' ? '#2e7d32' : '#B8906A',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          padding: '10px 0',
          fontWeight: 700,
          fontSize: 14,
          cursor: 'pointer',
          fontFamily: 'Heebo, sans-serif',
        }}
      >
        {status === 'uploading' ? '⏳ מעלה...' : status === 'done' ? '✓ הוחלף' : 'החלף תמונה'}
      </button>

      {msg && (
        <p style={{ fontSize: 13, color: status === 'error' ? '#c62828' : '#2e7d32', textAlign: 'center' }}>{msg}</p>
      )}
    </div>
  );
}

function VideoCard({ item }: { item: typeof VIDEOS[0] }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus('uploading');
    setMsg('');
    const form = new FormData();
    form.append('file', file);
    form.append('dest', item.path);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    const data = await res.json();
    if (res.ok) { setStatus('done'); setMsg('הועלה בהצלחה ✓'); }
    else { setStatus('error'); setMsg(data.error ?? 'שגיאה'); }
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      border: '1.5px solid #e8ddd4',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}>
      <div style={{
        width: '100%',
        height: 80,
        background: '#1a1a1a',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#B8906A',
        fontSize: 28,
      }}>▶</div>
      <p style={{ fontSize: 14, fontWeight: 700, color: '#3D2B1F', textAlign: 'right' }}>{item.label}</p>
      <p style={{ fontSize: 11, color: '#9A8070', textAlign: 'right', direction: 'ltr' }}>{item.path}</p>
      <input ref={inputRef} type="file" accept="video/mp4,video/*" onChange={handleFile} style={{ display: 'none' }} />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={status === 'uploading'}
        style={{
          background: status === 'done' ? '#2e7d32' : '#B8906A',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          padding: '10px 0',
          fontWeight: 700,
          fontSize: 14,
          cursor: 'pointer',
          fontFamily: 'Heebo, sans-serif',
        }}
      >
        {status === 'uploading' ? '⏳ מעלה...' : status === 'done' ? '✓ הוחלף' : 'החלף סרטון'}
      </button>
      {msg && <p style={{ fontSize: 13, color: status === 'error' ? '#c62828' : '#2e7d32', textAlign: 'center' }}>{msg}</p>}
    </div>
  );
}

function ContentEditor({ adminPassword }: { adminPassword: string }) {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const updateWeek = (i: number, field: 'title' | 'body', val: string) => {
    setContent(prev => {
      const weeks = [...prev.weeks];
      weeks[i] = { ...weeks[i], [field]: val };
      return { ...prev, weeks };
    });
  };

  const updateHighlight = (i: number, field: 'title' | 'desc', val: string) => {
    setContent(prev => {
      const highlights = [...prev.highlights];
      highlights[i] = { ...highlights[i], [field]: val };
      return { ...prev, highlights };
    });
  };

  const save = async () => {
    setStatus('saving');
    setMsg('');
    const res = await fetch('/api/github-save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, adminPassword }),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus('done');
      setMsg('נשמר בהצלחה. הדף יתעדכן תוך 2-3 דקות.');
    } else {
      setStatus('error');
      setMsg(data.error ?? 'שגיאה בשמירה');
    }
  };

  const inp: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 10,
    border: '1.5px solid #e8ddd4', fontFamily: 'Heebo, sans-serif',
    fontSize: 14, direction: 'rtl', outline: 'none', background: '#faf8f5',
    resize: 'vertical' as const,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* Weeks */}
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: '#3D2B1F', marginBottom: 20 }}>שבועות התוכנית</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {content.weeks.map((w, i) => (
            <div key={i} style={{ background: '#faf8f5', borderRadius: 14, padding: 18, border: '1px solid #e8ddd4' }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#B8906A', marginBottom: 10, letterSpacing: '0.05em' }}>{w.num}</p>
              <input
                value={w.title}
                onChange={e => updateWeek(i, 'title', e.target.value)}
                style={{ ...inp, fontWeight: 700, marginBottom: 10 }}
                placeholder="כותרת"
              />
              <textarea
                value={w.body}
                onChange={e => updateWeek(i, 'body', e.target.value)}
                style={{ ...inp, minHeight: 80 }}
                placeholder="תיאור"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: '#3D2B1F', marginBottom: 20 }}>מה כלול בתוכנית (6 כרטיסיות)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {content.highlights.map((h, i) => (
            <div key={i} style={{ background: '#faf8f5', borderRadius: 14, padding: 18, border: '1px solid #e8ddd4' }}>
              <input
                value={h.title}
                onChange={e => updateHighlight(i, 'title', e.target.value)}
                style={{ ...inp, fontWeight: 700, marginBottom: 10 }}
                placeholder="כותרת"
              />
              <textarea
                value={h.desc}
                onChange={e => updateHighlight(i, 'desc', e.target.value)}
                style={{ ...inp, minHeight: 70 }}
                placeholder="תיאור"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={save}
        disabled={status === 'saving'}
        style={{
          background: status === 'done' ? '#2e7d32' : status === 'error' ? '#c62828' : '#3D2B1F',
          color: '#fff', border: 'none', borderRadius: 12,
          padding: '14px 0', fontWeight: 700, fontSize: 16,
          cursor: 'pointer', fontFamily: 'Heebo, sans-serif',
        }}
      >
        {status === 'saving' ? 'שומרת...' : status === 'done' ? 'נשמר!' : 'שמרי שינויים'}
      </button>
      {msg && (
        <p style={{ textAlign: 'center', fontSize: 14, color: status === 'error' ? '#c62828' : '#2e7d32' }}>
          {msg}
        </p>
      )}
    </div>
  );
}

function SettingsPanel() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [sheetsUrl, setSheetsUrl] = useState('');
  const [ravCKey, setRavCKey] = useState('');
  const [ravCSecret, setRavCSecret] = useState('');
  const [ravUKey, setRavUKey] = useState('');
  const [ravUSecret, setRavUSecret] = useState('');
  const [ravList, setRavList] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [saved, setSaved] = useState(false);

  const load = async () => {
    const res = await fetch('/api/content');
    const data = await res.json();
    setPhone(data.phone ?? '');
    setPassword(data.adminPassword ?? '');
    setSheetsUrl(data.sheetsWebhook ?? '');
    setRavCKey(data.ravmesser?.cKey ?? '');
    setRavCSecret(data.ravmesser?.cSecret ?? '');
    setRavUKey(data.ravmesser?.uKey ?? '');
    setRavUSecret(data.ravmesser?.uSecret ?? '');
    setRavList(data.ravmesser?.listId ?? '');
    setLoaded(true);
  };

  if (!loaded) {
    return (
      <button onClick={load} style={{ background: '#B8906A', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Heebo, sans-serif' }}>
        טען הגדרות
      </button>
    );
  }

  const save = async () => {
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, adminPassword: password, sheetsWebhook: sheetsUrl, ravmesser: { cKey: ravCKey, cSecret: ravCSecret, uKey: ravUKey, uSecret: ravUSecret, listId: ravList } }),
    });
    if (res.ok) { setSaved(true); setTimeout(() => setSaved(false), 3000); }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 10,
    border: '1.5px solid #e8ddd4',
    fontFamily: 'Heebo, sans-serif',
    fontSize: 15,
    direction: 'rtl',
    outline: 'none',
    background: '#faf8f5',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 700, color: '#3D2B1F' }}>מספר וואטסאפ (ספרות בלבד, עם קידומת 972)</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} placeholder="972506409478" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 700, color: '#3D2B1F' }}>סיסמת ניהול</label>
        <input value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} type="password" />
      </div>
      <div style={{ borderTop: '1px solid #e8ddd4', paddingTop: 16, marginTop: 4 }}>
        <p style={{ fontWeight: 700, color: '#3D2B1F', marginBottom: 4 }}>📊 Google Sheets</p>
        <p style={{ fontSize: 12, color: '#9A8070', marginBottom: 10 }}>הלידים יופיעו אוטומטית בגיליון שלך. הכניסי את ה-Webhook URL לאחר ההגדרה.</p>
        <input
          value={sheetsUrl}
          onChange={e => setSheetsUrl(e.target.value)}
          style={{ ...inputStyle, direction: 'ltr', fontSize: 13, marginBottom: 16 }}
          placeholder="https://script.google.com/macros/s/..."
        />
      </div>

      <div style={{ borderTop: '1px solid #e8ddd4', paddingTop: 16, marginTop: 4 }}>
        <p style={{ fontWeight: 700, color: '#3D2B1F', marginBottom: 4 }}>🔗 רב מסר (אופציונלי)</p>
        <p style={{ fontSize: 12, color: '#9A8070', marginBottom: 14 }}>את ה-Tokens מקבלים מתמיכת רב מסר: <strong>03-7177777</strong></p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#6A5448' }}>c_key</label>
              <input value={ravCKey} onChange={e => setRavCKey(e.target.value)} style={{ ...inputStyle, direction: 'ltr', fontSize: 13 }} placeholder="c_key" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#6A5448' }}>c_secret</label>
              <input value={ravCSecret} onChange={e => setRavCSecret(e.target.value)} style={{ ...inputStyle, direction: 'ltr', fontSize: 13 }} placeholder="c_secret" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#6A5448' }}>u_key</label>
              <input value={ravUKey} onChange={e => setRavUKey(e.target.value)} style={{ ...inputStyle, direction: 'ltr', fontSize: 13 }} placeholder="u_key" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#6A5448' }}>u_secret</label>
              <input value={ravUSecret} onChange={e => setRavUSecret(e.target.value)} style={{ ...inputStyle, direction: 'ltr', fontSize: 13 }} placeholder="u_secret" />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 6, fontSize: 13, color: '#6A5448' }}>מזהה רשימה (List ID)</label>
            <input value={ravList} onChange={e => setRavList(e.target.value)} style={{ ...inputStyle, direction: 'ltr' }} placeholder="מספר הרשימה מרב מסר" />
          </div>
        </div>
      </div>
      <button
        onClick={save}
        style={{ background: saved ? '#2e7d32' : '#3D2B1F', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'Heebo, sans-serif' }}
      >
        {saved ? '✓ נשמר בהצלחה' : 'שמור הגדרות'}
      </button>
    </div>
  );
}

export default function AdminPage() {
  const [enteredPass, setEnteredPass] = useState('');
  const [authed, setAuthed] = useState(false);
  const [authErr, setAuthErr] = useState(false);
  const [imgVersion, setImgVersion] = useState(0);

  const checkPass = async () => {
    const res = await fetch('/api/content');
    const data = await res.json();
    if (enteredPass === data.adminPassword) {
      setAuthed(true);
    } else {
      setAuthErr(true);
    }
  };

  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#FAF8F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Heebo, sans-serif',
        direction: 'rtl',
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 20,
          padding: 40,
          width: 320,
          boxShadow: '0 8px 32px rgba(61,43,31,0.1)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 28, fontWeight: 900, color: '#B8906A', letterSpacing: '0.3em', marginBottom: 8 }}>FLOWEAT</p>
          <p style={{ fontSize: 14, color: '#9A8070', marginBottom: 24 }}>אזור ניהול</p>
          <input
            type="password"
            value={enteredPass}
            onChange={e => { setEnteredPass(e.target.value); setAuthErr(false); }}
            onKeyDown={e => e.key === 'Enter' && checkPass()}
            placeholder="סיסמה"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: 10,
              border: authErr ? '1.5px solid #e53e3e' : '1.5px solid #e8ddd4',
              fontFamily: 'Heebo, sans-serif',
              fontSize: 15,
              outline: 'none',
              marginBottom: 12,
              textAlign: 'center',
            }}
          />
          {authErr && <p style={{ color: '#e53e3e', fontSize: 13, marginBottom: 8 }}>סיסמה שגויה</p>}
          <button
            onClick={checkPass}
            style={{
              width: '100%',
              background: '#B8906A',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              padding: '12px 0',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              fontFamily: 'Heebo, sans-serif',
            }}
          >
            כניסה
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAF8F5',
      fontFamily: 'Heebo, sans-serif',
      direction: 'rtl',
      padding: '32px 20px',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 32, fontWeight: 900, color: '#B8906A', letterSpacing: '0.3em' }}>FLOWEAT</p>
          <p style={{ fontSize: 16, color: '#6A5448', marginTop: 4 }}>אזור ניהול הדף</p>
        </div>

        {/* Images section */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          padding: 28,
          border: '1.5px solid #e8ddd4',
          marginBottom: 28,
        }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#3D2B1F', marginBottom: 20, borderBottom: '1px solid #f0e8df', paddingBottom: 12 }}>
            📷 תמונות
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 16,
          }}>
            {IMAGES.map(item => (
              <ImageCard key={item.key} item={item} onRefresh={() => setImgVersion(v => v + 1)} />
            ))}
          </div>
        </div>

        {/* Videos section */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          padding: 28,
          border: '1.5px solid #e8ddd4',
          marginBottom: 28,
        }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#3D2B1F', marginBottom: 20, borderBottom: '1px solid #f0e8df', paddingBottom: 12 }}>
            🎬 סרטונים
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}>
            {VIDEOS.map(item => (
              <VideoCard key={item.key} item={item} />
            ))}
          </div>
        </div>

        {/* Content Editor */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          padding: 28,
          border: '1.5px solid #e8ddd4',
          marginBottom: 28,
        }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#3D2B1F', marginBottom: 8, borderBottom: '1px solid #f0e8df', paddingBottom: 12 }}>
            ✏️ עריכת תוכן הדף
          </h2>
          <p style={{ fontSize: 13, color: '#9A8070', marginBottom: 24 }}>
            ערכי את הטקסטים ולחצי שמרי. הדף יתעדכן תוך 2-3 דקות.
          </p>
          <ContentEditor adminPassword={enteredPass} />
        </div>

        {/* Settings */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          padding: 28,
          border: '1.5px solid #e8ddd4',
          marginBottom: 28,
        }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#3D2B1F', marginBottom: 20, borderBottom: '1px solid #f0e8df', paddingBottom: 12 }}>
            ⚙️ הגדרות ורב מסר
          </h2>
          <SettingsPanel />
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#B0A090', marginTop: 24 }}>
          לחזרה לדף: <a href="/" style={{ color: '#B8906A', textDecoration: 'underline' }}>לחצי כאן</a>
        </p>
      </div>
    </div>
  );
}
