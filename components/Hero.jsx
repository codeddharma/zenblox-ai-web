'use client';

import ZenbloxMark from './ZenbloxMark';
import { scrollTo } from '@/lib/scrollTo';

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="bg-grid" />
      <div className="bg-boxes">
        <div className="box" style={{ top: '12%', right: '8%', width: 56, height: 56 }} />
        <div className="filled" style={{ top: '12%', right: '8%', width: 56, height: 56, transform: 'translate(56px, 56px)' }} />
        <div className="ghost" style={{ top: '24%', right: '20%', width: 112, height: 56 }} />
        <div className="accent" style={{ top: '64%', right: '14%', width: 16, height: 16 }} />
        <div className="box" style={{ top: '70%', right: '6%', width: 112, height: 112 }} />
        <div className="filled" style={{ bottom: '14%', left: '6%', width: 56, height: 56 }} />
        <div className="ghost" style={{ top: '40%', left: '2%', width: 56, height: 168 }} />
      </div>
      <div className="container">
        <div className="hero-inner">
          <h1>
            Goal-driven AI for the
            <br />
            self-operating enterprise.
          </h1>
          <p className="hero-lede">
            Zenblox deploys autonomous Digital Officers that reason, plan, and execute across your most critical business functions, turning strategic goals into measurable outcomes.
          </p>
          <div className="hero-cta">
            <button type="button" className="btn btn-primary lg" onClick={scrollTo('operational')}>
              Explore Blox
            </button>
            <button type="button" className="btn btn-outline" onClick={scrollTo('contact')}>
              Book AI Workflow Audit
            </button>
          </div>
        </div>
      </div>
      <div className="hero-pixel-mark">
        <ZenbloxMark size={120} />
      </div>
      <div className="hero-bottom-bar mistral-gradient" />
    </section>
  );
}
