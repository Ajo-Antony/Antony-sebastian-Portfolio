import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';

function ProjectCard({ item, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} style={{
      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
      padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s, border-color 0.3s`,
      position: 'relative', overflow: 'hidden',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(110,231,183,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {item.featured && (
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.25)',
          borderRadius: '100px', padding: '2px 10px',
          fontFamily: 'var(--font-head)', fontSize: '10px', fontWeight: 700,
          color: 'var(--accent)', letterSpacing: '1px', textTransform: 'uppercase',
        }}>Featured</div>
      )}

      <div>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '4px' }}>{item.title}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--accent2)', fontWeight: 500 }}>{item.subtitle}</p>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{item.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.15)',
            color: 'var(--accent2)', fontSize: '11px', fontFamily: 'var(--font-head)', fontWeight: 600,
            padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.3px',
          }}>{tag}</span>
        ))}
      </div>

      {(item.github || item.live) && (
        <div style={{ display: 'flex', gap: '12px', paddingTop: '4px' }}>
          {item.github && <a href={item.github} target="_blank" rel="noreferrer" style={{ fontSize: '13px', fontFamily: 'var(--font-head)', fontWeight: 600, color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >GitHub →</a>}
          {item.live && <a href={item.live} target="_blank" rel="noreferrer" style={{ fontSize: '13px', fontFamily: 'var(--font-head)', fontWeight: 600, color: 'var(--accent)', transition: 'opacity 0.2s' }}>Live Demo ↗</a>}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useScrollReveal();
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);
  return (
    <section id="projects">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects</h2>
        </div>

        {/* Featured grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          {featured.map((p, i) => <ProjectCard key={p.id} item={p} index={i} />)}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <>
            <p style={{ fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '16px', marginTop: '8px' }}>Other Projects</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {rest.map((p, i) => <ProjectCard key={p.id} item={p} index={i + featured.length} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
