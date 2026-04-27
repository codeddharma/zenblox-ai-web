const groups = [
  { title: 'Accounting & ERP', items: ['Tally', 'SAP Business One', 'Zoho Books', 'ERPNext'] },
  { title: 'Communication', items: ['WhatsApp Business', 'Google Workspace', 'Slack', 'Microsoft Teams'] },
  { title: 'HR & People Ops', items: ['Zoho People', 'Darwinbox', 'Keka', 'Naukri.com'] },
  { title: 'Sales & Customer Relationship', items: ['Zoho CRM', 'HubSpot', 'Salesforce', 'Freshdesk'] },
  { title: 'Operations & Data', items: ['MS Excel', 'Manual Logbooks', 'IoT Sensors', 'Custom Portals'] },
  { title: 'Research & Intelligence', items: ['Google Search', 'LinkedIn', 'Zauba / Exim', 'Patent Databases'] },
];

export default function StackSection() {
  return (
    <section className="section-light" id="stack" data-screen-label="Stack">
      <div className="bg-grid" />
      <div className="bg-boxes">
        <div className="box" style={{ top: '8%', right: '4%', width: 56, height: 56 }} />
        <div className="accent" style={{ top: '8%', right: '4%', width: 12, height: 12, transform: 'translate(-12px, 56px)' }} />
        <div className="ghost" style={{ bottom: '12%', left: '3%', width: 168, height: 56 }} />
      </div>
      <div className="container">
        <div className="head">
          <h2>Supported tool integrations.</h2>
          <p>
            Zenblox plugs into the systems your teams already use, so autonomy starts around real workflows instead of another disconnected dashboard.
          </p>
        </div>
        <div className="stack-grid">
          {groups.map((g) => (
            <div className="stack-card" key={g.title}>
              <h3>{g.title}</h3>
              <div className="items">
                {g.items.map((i) => (
                  <div key={i}>{i}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
