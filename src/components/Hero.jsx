import { useEffect, useState } from 'react';
import { personal } from '../data/portfolio';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(110,231,183,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease',
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(110,231,183,0.08)', border: '1px solid rgba(110,231,183,0.2)', borderRadius: '100px', padding: '6px 16px', marginBottom: '32px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-head)', fontSize: '12px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '1px' }}>Available for opportunities</span>
          </div>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-head)', fontWeight: 800, lineHeight: 1.0,
          fontSize: 'clamp(3rem, 8vw, 6.5rem)', marginBottom: '24px',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.1s',
        }}>
          {personal.name.split(' ').map((word, i) => (
            <span key={i} style={{ display: 'block', color: i === 0 ? 'var(--text)' : 'transparent', WebkitTextStroke: i === 0 ? '0' : '2px rgba(255,255,255,0.25)' }}>
              {word}
            </span>
          ))}
        </h1>

        <p style={{
          fontFamily: 'var(--font-head)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 600,
          color: 'var(--accent2)', marginBottom: '20px', letterSpacing: '0.5px',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.2s',
        }}>
          {personal.title}
        </p>

        <p style={{
          fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.7, marginBottom: '48px',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.3s',
        }}>
          {personal.tagline}
        </p>

        <div style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.4s',
        }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--accent)', color: '#0a0a0f', fontFamily: 'var(--font-head)',
            fontWeight: 700, fontSize: '14px', padding: '14px 28px', borderRadius: '100px',
            letterSpacing: '0.5px', transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(110,231,183,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >View Projects →</a>
          <a href={`mailto:${personal.email}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', color: 'var(--text)', fontFamily: 'var(--font-head)',
            fontWeight: 700, fontSize: '14px', padding: '13px 28px', borderRadius: '100px',
            border: '1px solid var(--border)', letterSpacing: '0.5px', transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
          >Get in touch</a>
        </div>

        {/* Social row */}
        <div style={{
          marginTop: '64px', display: 'flex', gap: '24px', alignItems: 'center',
          opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.6s',
        }}>
          <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>Find me on</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', fontSize: '13px', fontFamily: 'var(--font-head)', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent2)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', fontSize: '13px', fontFamily: 'var(--font-head)', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >GitHub</a>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  );
}
