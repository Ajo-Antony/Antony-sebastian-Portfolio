import { useScrollReveal } from '../hooks/useScrollReveal';
import { personal } from '../data/portfolio';

export default function Contact() {
  const [ref, visible] = useScrollReveal();
  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'all 0.7s ease', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Let's Connect</p>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '20px' }}>
            Ready to build <span style={{ color: 'var(--accent)' }}>something great</span>?
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '48px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            I'm immediately available and excited to contribute to impactful AI and ML projects. Let's talk.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <a href={`mailto:${personal.email}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--accent)', color: '#0a0a0f', fontFamily: 'var(--font-head)',
              fontWeight: 700, fontSize: '1rem', padding: '16px 36px', borderRadius: '100px',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(110,231,183,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              ✉ {personal.email}
            </a>
            <a href={`tel:${personal.phone}`} style={{ color: 'var(--muted)', fontFamily: 'var(--font-head)', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{personal.phone}</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '48px' }}>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '13px',
              color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '100px',
              padding: '10px 20px', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.borderColor = 'rgba(129,140,248,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >LinkedIn ↗</a>
            <a href={personal.github} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '13px',
              color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: '100px',
              padding: '10px 20px', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(110,231,183,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >GitHub ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
