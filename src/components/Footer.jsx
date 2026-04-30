import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 24px', textAlign: 'center' }}>
      <p style={{ color: 'var(--muted)', fontSize: '13px', fontFamily: 'var(--font-head)' }}>
        Designed & Built by <span style={{ color: 'var(--accent)' }}>{personal.name}</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
