import { useScrollReveal } from '../hooks/useScrollReveal';
import { certifications } from '../data/portfolio';

const issuerColors = {
  'Amazon Web Services': '#FF9900',
  'IBM': '#1F70C1',
  'Anthropic': '#c96442',
  'WorldQuant University': '#6ee7b7',
  'freeCodeCamp': '#0A0A23',
  'PMI': '#2C6FAC',
  'Google': '#4285F4',
};

function CertCard({ cert, index }) {
  const [ref, visible] = useScrollReveal(0.05);
  const color = issuerColors[cert.issuer] || 'var(--accent2)';
  return (
    <div ref={ref} style={{
      display: 'flex', gap: '14px', alignItems: 'flex-start',
      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 0.5s ease ${(index % 4) * 0.07}s, transform 0.5s ease ${(index % 4) * 0.07}s, border-color 0.2s`,
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: color + '20', border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: '14px', fontWeight: 700, color: color, fontFamily: 'var(--font-head)' }}>{cert.issuer[0]}</span>
      </div>
      <div>
        <p style={{ fontSize: '11px', fontFamily: 'var(--font-head)', fontWeight: 600, color: color, marginBottom: '3px', letterSpacing: '0.3px' }}>{cert.issuer}</p>
        {cert.link ? (
          <a href={cert.link} target="_blank" rel="noreferrer"
            style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.4, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text)'}
          >{cert.title} ↗</a>
        ) : (
          <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.4 }}>{cert.title}</p>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  const [ref, visible] = useScrollReveal();
  return (
    <section id="certifications">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label">Learning</p>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {certifications.map((c, i) => <CertCard key={i} cert={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}