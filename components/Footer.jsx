'use client';

import ZenbloxMark from './ZenbloxMark';
import { scrollTo } from '@/lib/scrollTo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="brand-col">
            <div className="brand">
              <ZenbloxMark size={28} variant="cream" />
              <span className="brand-name" style={{ color: 'var(--bg)' }}>ZENBLOX</span>
            </div>
            <p className="desc">
              Goal-driven AI for the self-operating enterprise. We deploy autonomous Digital Officers for workflows where autonomy is proven to drive ROI.
            </p>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><button type="button" onClick={scrollTo('solutions')}>Trust & Assurance</button></li>
              <li><button type="button" onClick={scrollTo('process')}>ZEN Framework</button></li>
              <li><button type="button" onClick={scrollTo('operational')}>Operational Blox</button></li>
              <li><button type="button" onClick={scrollTo('growth')}>Growth-Focused Blox</button></li>
              <li><button type="button" onClick={scrollTo('stack')}>Integrations</button></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><button type="button" onClick={scrollTo('partners')}>Partners</button></li>
              <li><button type="button" onClick={scrollTo('contact')}>Contact Us</button></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <p style={{ margin: 0 }}>© 2026 Zenblox Technologies. All rights reserved.</p>
          <div>
            <a href="#">X (Twitter)</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="wordmark"><h1>ZENBLOX</h1></div>
      </div>
      <div className="grad-bar mistral-gradient" />
    </footer>
  );
}
