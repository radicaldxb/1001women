"use client";

import { useState } from "react";
import { navLinks, site } from "@/data/site";

export function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="inner">
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-nav"
          className={`navlinks${open ? " open" : ""}`}
          aria-label="Primary"
        >
          <a href="#top" onClick={() => setOpen(false)}>
            {site.name}
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="button" href="#join" onClick={() => setOpen(false)}>
            TAKE PART
          </a>
        </nav>
      </div>
    </header>
  );
}
