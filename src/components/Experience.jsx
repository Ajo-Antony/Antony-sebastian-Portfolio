import { useScrollReveal } from '../hooks/useScrollReveal';
import { experience } from '../data/portfolio';

function ExpCard({ item, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal stagger-${index + 1}`} style={{
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
    }}>
      <div style={{
        position: 'relative', paddingLeft: '32px', paddingBottom: index < experience.length - 1 ? '48px' : '0',
      }}>
        {/* Timeline line */}
        {index < experience.length - 1 && (
          <div style={{ position: 'absolute', left: '9px', top: '24px', bottom: 0, width: '1px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        )}
        {/* Dot */}
        <div style={{
          position: 'absolute', left: 0, top: '8px', width: '18px', height: '18px',
          borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px', transition: 'border-color 0.3s', cursor: 'default' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(110,231,183,0.25)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{item.role}</h3>
              <p style={{ color: 'var(--accent2)', fontWeight: 500, fontSize: '0.95rem', marginTop: '2px' }}>{item.company}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontFamily: 'var(--font-head)', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', display: 'block' }}>{item.period}</span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.location}</span>
            </div>
          </div>
          <ul style={{ listStyle: 'none', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {item.points.map((p, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }}>▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, visible] = useScrollReveal();
  return (
    <section id="experience" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <div>
          {experience.map((item, i) => <ExpCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
