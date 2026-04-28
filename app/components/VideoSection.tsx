'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VIDEOS = [
  { id: 'SQH6WhpBRHQ', title: 'עדות 1' },
  { id: 'Ls-oDRdJHPI', title: 'עדות 2' },
];

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: 'var(--bg-light)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

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
          justifyItems: 'center',
        }}>
          {VIDEOS.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
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
                src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                title={v.title}
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
          ))}
        </div>

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
