const steps = [
  { n: '01', t: 'ZERO-IN', d: 'We pinpoint high-leverage workflows where autonomy can produce immediate ROI, removing the noise of unnecessary automation.' },
  { n: '02', t: 'EXECUTE', d: 'Digital Officers reason, plan, and act across tools and teams to convert high-level goals into finished business outcomes.' },
  { n: '03', t: 'NURTURE', d: 'We maintain guardrails, audits, feedback loops, and continuous optimization so autonomy scales with trust.' },
];

export default function ProcessSection() {
  return (
    <section className="section-light" id="process" data-screen-label="Process">
      <div className="bg-grid" />
      <div className="bg-boxes">
        <div className="filled" style={{ top: '14%', right: '10%', width: 56, height: 56 }} />
        <div className="ghost" style={{ top: '14%', right: '10%', width: 56, height: 56, transform: 'translate(-56px, 0)' }} />
      </div>
      <div className="container">
        <div className="head" style={{ maxWidth: 'none' }}>
          <h2>The ZEN Framework.</h2>
          <div className="gradient-rule mistral-gradient" />
        </div>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="process-step" key={s.n}>
              <div className="process-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
