'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const VIDEOS = [
  { id: 'SQH6WhpBRHQ' },
  { id: 'Ls-oDRdJHPI' },
];

function VideoPlayer({ id, delay }: { id: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=1&playsinline=1`;

  return (
    <motion.div
      ref={ref}
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
        src={src}
        title={`עדות ${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
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
            <VideoPlayer key={v.id} id={v.id} delay={i * 0.15} />
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
