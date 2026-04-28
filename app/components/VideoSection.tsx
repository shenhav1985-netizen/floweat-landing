'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const VIDEOS = [
  '/videos/testimonial1.mp4',
  '/videos/testimonial2.mp4',
];

function VideoPlayer({
  src,
  autoplay,
  delay,
}: {
  src: string;
  autoplay: boolean;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-10%' });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoplay && inView) {
      videoRef.current?.play().catch(() => {});
      setPlaying(true);
    }
  }, [autoplay, inView]);

  const handlePlay = () => {
    videoRef.current?.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay }}
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        border: '1.5px solid rgba(196,112,74,0.25)',
        boxShadow: '0 4px 24px rgba(28,16,8,0.12)',
        background: '#0D0906',
        cursor: playing ? 'default' : 'pointer',
      }}
      onClick={!playing ? handlePlay : undefined}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        style={{ width: '100%', display: 'block', maxHeight: 520, objectFit: 'cover' }}
      />

      {!playing && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.4)',
        }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{
              width: 68,
              height: 68,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
              marginBottom: 12,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <polygon points="8,4 20,12 8,20" fill="#C4704A" />
            </svg>
          </motion.div>
          <span style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.8)',
            textTransform: 'uppercase',
          }}>PLAY</span>
        </div>
      )}
    </motion.div>
  );
}

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: 'var(--bg-light)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Divider top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="copper-divider"
          style={{ marginBottom: 48 }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {VIDEOS.map((src, i) => (
            <VideoPlayer
              key={i}
              src={src}
              autoplay={i === 0}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Divider bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="copper-divider"
          style={{ marginTop: 48 }}
        />
      </div>
    </section>
  );
}
