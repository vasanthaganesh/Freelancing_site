import React, { useState } from "react";
import { TextRoll } from "./TextRoll";

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Results', href: '#results' },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-background/50 border-b border-border/50">
        <div className="font-bold text-xl tracking-tighter">
          V<span className="text-brand-blue">G</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 bg-card/80 px-8 py-3 rounded-full border border-border/50 shadow-lg">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <TextRoll text={item.name} />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-blue text-[#0f1117] text-sm font-semibold hover:bg-brand-blue-light transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Start a Project
        </a>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            /* X icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 z-40 backdrop-blur-md bg-background/95 border-b border-border/50 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/20 last:border-0 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full text-center px-5 py-3 rounded-full bg-brand-blue text-[#0f1117] text-sm font-semibold hover:bg-brand-blue-light transition-all duration-300"
            >
              Start a Project
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
