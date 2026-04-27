import { Icon } from './Icons';

function FeatureLi({ children }) {
  return (
    <li>
      <Icon.Chevron />
      <span>{children}</span>
    </li>
  );
}

export default function SageSection() {
  return (
    <section className="product dark" id="partners" data-screen-label="Partners">
      <div className="container">
        <div className="grid-2">
          <div>
            <div className="eyebrow">Partner Ecosystem</div>
            <h2>Built with the teams already trusted by your business.</h2>
            <div className="gradient-rule mistral-gradient" />
            <p className="lead">
              We work with implementation partners, ERP consultants, CRM specialists, and managed service teams to bring Digital Officers into existing enterprise environments.
            </p>
            <ul className="feature-list">
              <FeatureLi>Implementation partners help map workflows, users, controls, and local operating realities.</FeatureLi>
              <FeatureLi>Technology partners support secure connectors for ERP, CRM, HRMS, support, and data systems.</FeatureLi>
              <FeatureLi>Domain partners bring procurement, manufacturing, finance, HR, and after-sales expertise.</FeatureLi>
              <FeatureLi>Co-managed rollouts keep adoption practical, measurable, and easy to govern.</FeatureLi>
            </ul>
          </div>
          <div className="demo-card">
            <div className="sage-file">PARTNER_ROLLOUT.md</div>
            <div>
              <div className="sage-block crit">
                <div className="head">
                  <Icon.Target />
                  <h4>Workflow Audit</h4>
                </div>
                <p>
                  Partner maps the current workflow, tool access, business owner, approval points, and measurable ROI target.
                </p>
              </div>
              <div className="sage-block warn">
                <div className="head">
                  <Icon.Pull />
                  <h4>Connector Readiness</h4>
                </div>
                <p>
                  Zenblox validates data, permissions, audit logging, and human approval gates before autonomous execution.
                </p>
                <span className="sage-tag">Sandbox first, production after sign-off</span>
              </div>
              <div className="sage-block">
                <div className="head">
                  <Icon.File className="ico" />
                  <h4>Shared Success Metrics</h4>
                </div>
                <p>
                  Every rollout tracks cycle time, savings, accuracy, adoption, and escalations with transparent reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
