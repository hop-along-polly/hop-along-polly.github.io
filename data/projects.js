/* ==========================================================================
   Projects
   --------------------------------------------------------------------------
   TO ADD A PROJECT: copy a block below, drop it in the array, save. Done.

   Fields
     name       (required) Display title.
     tagline    (required) One line. Shown under the title.
     description             Longer prose. Featured cards only.
     year                    String. Shown in the card kicker.
     featured                true  -> large card with artwork, in "Portfolio"
                             false -> compact card in "More from the Workshop"
     status                  Optional pill, e.g. "Live", "In progress", "Archived".
     tech       (required) Array of strings. Rendered as monospace chips.
     highlights              Array of strings. Featured cards only.
     links      (required) Array of { label, href, primary? }.
                           primary: true renders the filled brass button.
     art                     Motif id from js/motifs.js ("otrio", "plunder",
                             "grid"). Ignored when `image` is set.
     image                   Path to an image, e.g. "assets/projects/foo.png".
                             Takes precedence over `art`.
   ========================================================================== */

const PROJECTS = [
  {
    name: "Otrio Online",
    tagline: "Three-in-a-row with three different ways to win, and a bot that knows all of them.",
    description:
      "Otrio is a ring-placement game for 2 to 4 players: you're racing to line up three rings before anyone else, except \"three in a row\" means three different things at once. Same-size, ascending-size, and concentric-stack all win, so every placement is simultaneously offense and defense. I built the whole thing (board, drag-and-drop, win detection across all three conditions, and a bot opponent) in plain HTML, CSS, and JavaScript. No framework, no bundler, no install step. Open the file and play.",
    year: "2026",
    featured: true,
    status: "Live",
    tech: ["JavaScript", "HTML5", "CSS3", "Game AI", "Zero dependencies"],
    highlights: [
      "Three simultaneous win conditions: same-size, ordered-size, and concentric",
      "Bot opponent written from scratch; mix humans and bots across 2 to 4 seats",
      "Built-in tutorial, light and dark themes, plays on phone or desktop",
      "Ships as three files: no build step, no package manager, no downloads",
    ],
    links: [
      { label: "Play Otrio", href: "https://hop-along-polly.github.io/otrio-online/", primary: true },
      { label: "Source", href: "https://github.com/hop-along-polly/otrio-online" },
    ],
    art: "otrio",
  },

  {
    name: "Plunder",
    tagline: "A pirate board game for six swashbucklers, sailing out of a single browser tab.",
    description:
      "An online adaptation of the board game Plunder, built with the same constraint I gave myself for Otrio: vanilla HTML, CSS, and JavaScript, no dependencies. Up to six players share one screen to sail the high seas. It's an ongoing exercise in how far you can push game state, turn order, and animation with nothing but the platform.",
    year: "2026",
    featured: true,
    status: "Live",
    tech: ["JavaScript", "HTML5", "CSS3", "Game state", "Zero dependencies"],
    highlights: [
      "Supports up to 6 players in a single hot-seat session",
      "Hand-rolled turn and game-state engine, with no framework doing the bookkeeping",
      "Nautical art direction carried end to end, from setup screen to scoring",
    ],
    links: [
      { label: "Set Sail", href: "https://hop-along-polly.github.io/plunder/", primary: true },
      { label: "Source", href: "https://github.com/hop-along-polly/plunder" },
    ],
    art: "plunder",
  },

  /* ---- Compact cards: "More from the Workshop" -------------------------- */

  {
    name: "fastapi-webapp-react",
    tagline: "A production-shaped starter for FastAPI, React, and TypeScript, wired together properly.",
    year: "2026",
    featured: false,
    tech: ["Python", "FastAPI", "React", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/hop-along-polly/fastapi-webapp-react" }],
  },
  {
    name: "kata",
    tagline: "The exercises I reach for when mentoring developers: deliberate practice, not puzzles.",
    year: "2022",
    featured: false,
    tech: ["Python", "Mentoring", "TDD"],
    links: [{ label: "Source", href: "https://github.com/hop-along-polly/kata" }],
  },
  {
    name: "crucible",
    tagline: "Open-source stress testing for REST APIs, driven straight off an OpenAPI v3 spec.",
    year: "2021",
    featured: false,
    tech: ["Python", "Locust", "OpenAPI"],
    links: [{ label: "Source", href: "https://github.com/hop-along-polly/crucible" }],
  },
  {
    name: "mimic",
    tagline: "A REST API that always answers with the exact response you asked for. Invaluable for tests.",
    year: "2025",
    featured: false,
    tech: ["Python", "Testing", "REST"],
    links: [{ label: "Source", href: "https://github.com/hop-along-polly/mimic" }],
  },
  {
    name: "scribbles",
    tagline: "A completely unstyled component library: behaviour and accessibility, zero opinions on looks.",
    year: "2025",
    featured: false,
    tech: ["TypeScript", "Components", "a11y"],
    links: [{ label: "Source", href: "https://github.com/hop-along-polly/scribbles" }],
  },
];
