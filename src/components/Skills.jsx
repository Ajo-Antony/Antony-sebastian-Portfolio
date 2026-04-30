import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/portfolio';

const colors = ['var(--accent)', 'var(--accent2)', 'var(--accent3)', 'var(--accent)', 'var(--accent2)'];

function SkillGroup({ group, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} style={{
      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <div style={{ width: '3px', height: '18px', borderRadius: '2px', background: colors[index % colors.length] }} />
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>{group.category}</h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {group.items.map(skill => (
          <span key={skill} style={{
            background: 'var(--bg3)', border: '1px solid var(--border)',
            color: 'var(--muted)', fontSize: '13px', padding: '5px 12px', borderRadius: '8px',
            fontFamily: 'var(--font-head)', fontWeight: 500, transition: 'all 0.2s', cursor: 'default',
          }}
            onMouseEnter={e => { e.target.style.color = colors[index % colors.length]; e.target.style.borderColor = colors[index % colors.length].replace('var(', 'rgba(').replace(')', ',0.3)'); }}
            onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.borderColor = 'var(--border)'; }}
          >{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useScrollReveal();
  return (
    <section id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {skills.map((g, i) => <SkillGroup key={g.category} group={g} index={i} />)}
        </div>
      </div>
    </section>
  );
}
