import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black tracking-tighter">
          V<span className="text-brand-blue">G</span>
        </div>
        <p className="text-sm text-muted-foreground font-light">
          © {new Date().getFullYear()} Vasanthaganesh R. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/vasanthaganesh-raja-085124231" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-blue transition-colors">LinkedIn</a>
          <a href="https://t.me/VasanthaganeshRaja" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-blue transition-colors">Telegram</a>
          <a href="https://wa.me/918122435956" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-blue transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};
