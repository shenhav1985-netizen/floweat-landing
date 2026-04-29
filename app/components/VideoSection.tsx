'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const VIDEOS = [
  { id: 'SQH6WhpBRHQ' },
  { id: 'Ls-oDRdJHPI' },
];

function VideoPlayer({ id, delay, clickToPlay }: { id: string; delay: number; clickToPlay?: boolean }) {
  const [active, setActive] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    // Set src imperatively — preserves user gesture so browser allows sound
    const autoSrc = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&controls=1&playsinline=1`;
    if (iframeRef.current) iframeRef.current.src = autoSrc;
    setActive(true);
  };

  const staticSrc = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=1&playsinline=1`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay }}
      style={{
        width: '100%',
        maxWidth: 340,
        borderRadius: 20,
        overflow: 'hidden',
        border: '1.5px solid rgba(196,112,74,0.25)',
        boxShadow: '0 4px 24px rgba(28,16,8,0.12)',
        background: '#0D0906',
        aspectRatio: '9 / 16',
        position: 'relative',
      }}
    >
      <iframe
        ref={iframeRef}
        src={staticSrc}
        title={`עדות ${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
      />
      {clickToPlay && !active && (
        <div
          onClick={handlePlay}
          style={{
            position: 'absolute', inset: 0, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.18)',
          }}
        >
          <div style={{
            width: 68, height: 68, borderRadius: '50%',
            background: 'rgba(196,112,74,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function VideoSection() {
  return (
    <section style={{ background: 'var(--bg-light)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="copper-divider"
          style={{ marginBottom: 48 }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          justifyItems: 'center',
        }}>
          {VIDEOS.map((v, i) => (
            <VideoPlayer key={v.id} id={v.id} delay={i * 0.15} clickToPlay={i === 0} />
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="copper-divider"
          style={{ marginTop: 48 }}
        />
      </div>
    </section>
  );
}
