const items = [
  { t: 'ROI-Proven Selection', d: 'We only automate workflows with clear, measurable financial impact and an accountable business owner.' },
  { t: 'Human-in-the-Loop Guardrails', d: 'Your team keeps authority and oversight for approvals, exceptions, and high-stakes actions.' },
  { t: 'Transparent Reasoning', d: 'Every plan, decision path, handoff, and execution is visible and auditable by design.' },
  { t: 'Enterprise-Grade Security', d: 'Your business logic and data remain protected inside your governed environment.' },
];

export default function WhySection() {
  return (
    <section className="why" id="solutions" data-screen-label="Trust">
      <div className="bg-grid-dark" />
      <div className="bg-boxes dark">
        <div className="box" style={{ top: '10%', right: '6%', width: 56, height: 56 }} />
        <div className="filled" style={{ top: '10%', right: '6%', width: 56, height: 56, transform: 'translate(-56px, 56px)' }} />
        <div className="accent" style={{ top: '10%', right: '6%', width: 12, height: 12, transform: 'translate(56px, 0)' }} />
        <div className="ghost" style={{ bottom: '14%', left: '4%', width: 112, height: 56 }} />
      </div>
      <div className="container">
        <div className="head">
          <h2>Trust & assurance.</h2>
          <p>Autonomy works only when outcomes, oversight, reasoning, and security are built into the operating model from day one.</p>
        </div>
        <div className="why-grid">
          {items.map((i) => (
            <div className="why-item" key={i.t}>
              <div className="rule" />
              <h3>{i.t}</h3>
              <p>{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
