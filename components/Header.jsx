'use client';

import { useState } from 'react';
import ZenbloxMark from './ZenbloxMark';
import { scrollTo } from '@/lib/scrollTo';

const navItems = [
  { label: 'Solutions', target: 'solutions' },
  { label: 'Operational Blox', target: 'operational' },
  { label: 'Growth Blox', target: 'growth' },
  { label: 'Partners', target: 'partners' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const goTo = (target) => (e) => {
    setOpen(false);
    scrollTo(target)(e);
  };

  return (
    <header className="site-header" data-screen-label="Header">
      <div className="container">
        <div className="row">
          <div
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ZenbloxMark size={28} />
            <span className="brand-name">ZENBLOX</span>
          </div>
          <nav className="nav-links">
            {navItems.map((item) => (
              <button type="button" key={item.target} onClick={goTo(item.target)}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="header-actions">
            <button type="button" className="btn btn-primary desktop-contact" onClick={goTo('contact')}>
              Contact Us
            </button>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        {open && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button type="button" key={item.target} onClick={goTo(item.target)}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
