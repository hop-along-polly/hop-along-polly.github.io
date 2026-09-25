/* ==========================================================================
   Motifs & Icons
   --------------------------------------------------------------------------
   Inline SVG, injected rather than linked, so the artwork inherits
   `currentColor` and the brass custom property and repaints correctly when
   the theme flips. Line art at 1.5–2px stroke, per the house style.

   To give a new project artwork, either add a motif here and reference it by
   key (`art: "myMotif"`), or skip all this and point `image:` at a file.
   ========================================================================== */

const MOTIFS = {
  /* Otrio: a board mid-game. The brass diagonal is an "ordered size" win --
     small, then medium, then large. The muted stack at centre-left is a
     "concentric" threat. Both are real win conditions in the game. */
  otrio: `
    <svg viewBox="0 0 400 400" role="img" aria-label="An Otrio board showing rings of three sizes arranged on a three by three grid">
      <g stroke="currentColor" stroke-width="1" opacity=".28">
        <rect x="35" y="35" width="330" height="330" fill="none" rx="6"/>
        <line x1="145" y1="35" x2="145" y2="365"/>
        <line x1="255" y1="35" x2="255" y2="365"/>
        <line x1="35" y1="145" x2="365" y2="145"/>
        <line x1="35" y1="255" x2="365" y2="255"/>
      </g>
      <g fill="none" stroke-width="7" stroke="currentColor" opacity=".38">
        <circle cx="310" cy="90" r="45"/>
        <circle cx="90"  cy="200" r="45"/>
        <circle cx="90"  cy="200" r="30"/>
        <circle cx="90"  cy="200" r="15"/>
        <circle cx="200" cy="310" r="30"/>
        <circle cx="310" cy="200" r="15"/>
      </g>
      <g fill="none" stroke-width="8" stroke="var(--accent)">
        <circle cx="90"  cy="90"  r="15"/>
        <circle cx="200" cy="200" r="30"/>
        <circle cx="310" cy="310" r="45"/>
      </g>
      <g stroke="var(--accent)" stroke-width="1.5" opacity=".5" stroke-dasharray="5 7">
        <line x1="90" y1="90" x2="310" y2="310"/>
      </g>
    </svg>`,

  /* Plunder: a compass rose over open water. */
  plunder: `
    <svg viewBox="0 0 400 400" role="img" aria-label="A compass rose above stylised ocean waves">
      <g fill="none" stroke="currentColor" stroke-width="1.5" opacity=".3">
        <circle cx="200" cy="170" r="128"/>
        <circle cx="200" cy="170" r="104"/>
      </g>
      <g stroke="currentColor" stroke-width="1.5" opacity=".45">
        <line x1="200" y1="42"  x2="200" y2="66"/>
        <line x1="200" y1="274" x2="200" y2="298"/>
        <line x1="72"  y1="170" x2="96"  y2="170"/>
        <line x1="304" y1="170" x2="328" y2="170"/>
        <line x1="109" y1="79"  x2="126" y2="96"/>
        <line x1="274" y1="244" x2="291" y2="261"/>
        <line x1="291" y1="79"  x2="274" y2="96"/>
        <line x1="126" y1="244" x2="109" y2="261"/>
      </g>
      <path d="M200 66 L222 170 L200 274 L178 170 Z" fill="var(--accent)" opacity=".92"/>
      <path d="M96 170 L200 148 L304 170 L200 192 Z" fill="currentColor" opacity=".45"/>
      <circle cx="200" cy="170" r="9" fill="var(--ground)" stroke="var(--accent)" stroke-width="3"/>
      <g fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" opacity=".65">
        <path d="M40 332 q26 -17 52 0 t52 0 t52 0 t52 0 t52 0"/>
        <path d="M40 362 q26 -17 52 0 t52 0 t52 0 t52 0 t52 0" opacity=".55"/>
      </g>
    </svg>`,

  /* Fallback: blueprint grid with a few surveyed nodes. */
  grid: `
    <svg viewBox="0 0 400 400" role="img" aria-label="An abstract blueprint grid">
      <g stroke="currentColor" stroke-width="1" opacity=".22">
        <line x1="80"  y1="30" x2="80"  y2="370"/>
        <line x1="160" y1="30" x2="160" y2="370"/>
        <line x1="240" y1="30" x2="240" y2="370"/>
        <line x1="320" y1="30" x2="320" y2="370"/>
        <line x1="30" y1="80"  x2="370" y2="80"/>
        <line x1="30" y1="160" x2="370" y2="160"/>
        <line x1="30" y1="240" x2="370" y2="240"/>
        <line x1="30" y1="320" x2="370" y2="320"/>
      </g>
      <polyline points="80,320 160,240 240,260 320,80" fill="none"
                stroke="var(--accent)" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round"/>
      <g fill="var(--accent)">
        <circle cx="80"  cy="320" r="6"/>
        <circle cx="160" cy="240" r="6"/>
        <circle cx="240" cy="260" r="6"/>
        <circle cx="320" cy="80"  r="6"/>
      </g>
    </svg>`,
};

/* Lucide-flavoured stroke icons, sized by the CSS that hosts them. */
const ICONS = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-10h4v1.5"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  pen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
};
