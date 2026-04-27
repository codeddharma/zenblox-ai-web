'use client';

import { useState } from 'react';
import { Icon } from './Icons';

function FeatureLi({ children }) {
  return (
    <li>
      <Icon.Chevron />
      <span>{children}</span>
    </li>
  );
}

export default function PrismSection() {
  const [bars, setBars] = useState([40, 70, 55, 90, 65, 80]);
  return (
    <section className="product dark" id="operational" data-screen-label="Operational Blox">
      <div className="container">
        <div className="grid-2">
          <div>
            <div className="eyebrow">Saving Money</div>
            <h2>Operational Blox</h2>
            <div className="gradient-rule mistral-gradient" />
            <p className="lead">
              Autonomous Digital Officers for the workflows that protect margins, reduce leakage, and remove repetitive operational drag.
            </p>
            <ul className="feature-list">
              <FeatureLi>Procurement & Supply Chain: vendor follow-ups, price checks, purchase workflows, and exception alerts.</FeatureLi>
              <FeatureLi>Production & Operations: plan-versus-actual tracking, logbook digitization, and bottleneck escalation.</FeatureLi>
              <FeatureLi>Sales & Revenue Operations: CRM hygiene, quote movement, pipeline actions, and WhatsApp follow-ups.</FeatureLi>
              <FeatureLi>Finance, Accounts & HR: reconciliation, compliance reminders, hiring workflows, and employee operations.</FeatureLi>
            </ul>
          </div>
          <div
            className="demo-card"
            onMouseEnter={() => setBars(bars.map(() => 20 + Math.random() * 75))}
          >
            <div className="demo-row">
              <Icon.Search />
              <div className="q">Goal: &quot;Reduce procurement leakage this quarter&quot;</div>
            </div>
            <div className="demo-stack">
              <div className="demo-answer">
                <p style={{ margin: 0 }}>
                  Digital Officer identified <strong>3 recurring vendor variance patterns</strong>, drafted negotiation notes, and queued approval requests for high-impact purchase orders.
                </p>
                <div className="demo-cite">
                  <span>Tally Purchase Module</span>
                  <span>MS Excel</span>
                  <span>WhatsApp</span>
                </div>
              </div>
              <div className="demo-chart">
                {bars.map((h, i) => (
                  <div key={i} className="demo-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
