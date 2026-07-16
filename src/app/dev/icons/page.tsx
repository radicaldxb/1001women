"use client";

import { useMemo, useState } from "react";
import { uiconsCatalog } from "@/data/uicons-catalog";

type StyleKey = keyof typeof uiconsCatalog;

const styleLabels: Record<StyleKey, string> = {
  "thin-straight": "Thin Straight (fi-ts)",
  "thin-rounded": "Thin Rounded (fi-tr)",
  "bold-straight": "Bold Straight (fi-bs)",
};

export default function IconsBrowserPage() {
  const [style, setStyle] = useState<StyleKey>("thin-rounded");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");

  const icons = uiconsCatalog[style];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return icons.slice(0, 240);
    return icons.filter((name) => name.includes(q)).slice(0, 400);
  }, [icons, query]);

  function copyClass(name: string) {
    const value = `fi ${name}`;
    void navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied(""), 1600);
  }

  return (
    <div className="icons-browser">
      <header className="icons-browser-head">
        <p className="icons-browser-kicker">Local tool</p>
        <h1>Uicons browser</h1>
        <p>
          Icons from the open-source <code>@flaticon/flaticon-uicons</code> pack
          installed in this project. Click an icon to copy its class.
        </p>
        <p className="icons-browser-note">
          Tip: search <code>pharmacy</code>, <code>book</code>, <code>star</code>,
          etc. Empty search shows the first 240 icons in the selected style.
        </p>
      </header>

      <div className="icons-browser-controls">
        <label>
          Style
          <select
            value={style}
            onChange={(event) => setStyle(event.target.value as StyleKey)}
          >
            {(Object.keys(styleLabels) as StyleKey[]).map((key) => (
              <option key={key} value={key}>
                {styleLabels[key]} — {uiconsCatalog[key].length}
              </option>
            ))}
          </select>
        </label>

        <label className="icons-browser-search">
          Search
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. pharmacy, constellation, total"
            autoFocus
          />
        </label>
      </div>

      <p className="icons-browser-meta">
        Showing {filtered.length}
        {query.trim() ? ` match(es)` : ` (preview)`} of {icons.length}
        {copied ? (
          <span className="icons-browser-copied"> Copied: {copied}</span>
        ) : null}
      </p>

      <div className="icons-browser-grid">
        {filtered.map((name) => (
          <button
            key={name}
            type="button"
            className="icons-browser-item"
            onClick={() => copyClass(name)}
            title={`Click to copy: fi ${name}`}
          >
            <i className={`fi ${name}`} aria-hidden />
            <span>{name}</span>
          </button>
        ))}
      </div>

      {!filtered.length ? (
        <p className="icons-browser-empty">No icons match that search.</p>
      ) : null}
    </div>
  );
}
