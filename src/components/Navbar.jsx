import { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent)', letterSpacing: '-0.5px' }}>
          {personal.name.split(' ')[0]}<span style={{ color: 'var(--accent2)' }}>.</span>
        </span>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '32px' }} className="nav-desktop">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'var(--font-head)', fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.5px', color: 'var(--muted)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text)', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
        }} className="nav-burger">
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text)', borderRadius: '2px', transition: 'all 0.3s' }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--bg2)', borderTop: '1px solid var(--border)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '1rem', color: 'var(--text)' }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
