import { Icon } from './Icons';

function FeatureLi({ children }) {
  return (
    <li>
      <Icon.Chevron />
      <span>{children}</span>
    </li>
  );
}

export default function ForgeSection() {
  return (
    <section className="product" id="growth" data-screen-label="Growth Blox">
      <div className="container">
        <div className="grid-2">
          <div className="demo-card forge-card" style={{ order: 1 }}>
            <div className="demo-row" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon.Pull />
                <span className="q">Growth Workflows</span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono), IBM Plex Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'rgba(31,31,31,0.5)',
                  background: 'rgba(31,31,31,0.05)',
                  padding: '4px 8px',
                }}
              >
                Running
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="forge-row active">
                <div className="left">
                  <Icon.Check />
                  <span className="label">Customer warranty follow-up</span>
                </div>
                <span className="meta">Step 3/5</span>
              </div>
              <div className="forge-row">
                <div className="left">
                  <Icon.Check />
                  <span className="label">Competitor price intelligence</span>
                </div>
                <span className="meta">Awaiting approval</span>
              </div>
              <div className="forge-row">
                <div className="left">
                  <Icon.Check />
                  <span className="label">R&D technical document scan</span>
                </div>
                <span className="meta">Completed</span>
              </div>
              <div className="forge-row">
                <div className="left">
                  <Icon.Check />
                  <span className="label">Export lead research</span>
                </div>
                <span className="meta">Draft</span>
              </div>
            </div>
          </div>
          <div style={{ order: 2 }}>
            <div className="eyebrow">Growing Revenue</div>
            <h2>Growth-Focused Blox</h2>
            <div className="gradient-rule mistral-gradient" />
            <p className="lead">
              Autonomous workflows for customer loyalty, product innovation, and market intelligence, built to help teams find growth signals earlier.
            </p>
            <ul className="feature-list">
              <FeatureLi>Customer Experience & After-Sales: service follow-ups, warranty checks, and support escalation.</FeatureLi>
              <FeatureLi>Product Development & R&D: technical manual analysis, standard comparisons, and patent scans.</FeatureLi>
              <FeatureLi>Marketing & Market Intelligence: competitor tracking, LinkedIn research, and import-export signals.</FeatureLi>
              <FeatureLi>Human approvals stay attached to sensitive customer, pricing, and product decisions.</FeatureLi>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
