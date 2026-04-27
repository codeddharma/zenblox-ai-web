'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };
  return (
    <section className="contact" id="contact" data-screen-label="Contact">
      <div className="bg-grid" />
      <div className="bg-boxes">
        <div className="ghost" style={{ top: '14%', right: '6%', width: 56, height: 168 }} />
        <div className="accent" style={{ bottom: '20%', left: '4%', width: 16, height: 16 }} />
        <div className="filled" style={{ bottom: '12%', left: '4%', width: 56, height: 56, transform: 'translate(56px, 0)' }} />
      </div>
      <div className="container">
        <div className="contact-grid">
          <div>
            <h2>Identify your first autonomous workflow.</h2>
            <div
              className="gradient-rule mistral-gradient"
              style={{ height: 8, width: '100%', maxWidth: 540, marginBottom: 48 }}
            />
            <p className="lead">
              We&apos;ll review your current systems, find the highest-ROI workflow, and define the Digital Officer that can safely execute it.
            </p>
            <div className="resp">Suggested first step: AI Workflow Audit</div>
          </div>
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="row">
                <div className="field">
                  <label>Name</label>
                  <input name="name" />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input name="company" />
                </div>
              </div>
              <div className="field">
                <label>Work Email</label>
                <input type="email" name="email" />
              </div>
              <div className="field">
                <label>Workflow / Business Goal</label>
                <textarea name="message" />
              </div>
              <button className="btn btn-cream" type="submit">
                {submitted ? 'Sent ✓' : 'Book Workflow Audit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
