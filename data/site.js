/* ==========================================================================
   Site-wide content: identity, hero copy, the stat strip, and contact links.
   Edit the values here; nothing in css/ or js/ needs to change.
   ========================================================================== */

const SITE = {
  name: "Derek Drummond",
  monogram: "DD",
  role: "Software Engineer",
  location: "Colorado Springs, CO",

  /* dev.to username. Articles are pulled live from this account at page load,
     so publishing a new post is all it takes to have it show up here. */
  devtoUsername: "ezzy1337",

  hero: {
    kicker: "Engineer · Mentor · Team Lead",
    lede: "14+ years building cloud-native applications and data pipelines that carry millions of requests a day. I've led teams that shipped 10 products across cyber-security, fin-tech, and ad-tech, and mentored 50+ engineers along the way.",
    note: "This site is the half of my work that doesn't fit on a résumé: the things I built for the love of the craft, and articles I have written about mastering the craft of coding.",
  },

  /* The numbers strip under the hero. Add or remove entries freely. */
  stats: [
    { value: "14+", label: "Years shipping software" },
    { value: "50+", label: "Engineers mentored" },
    { value: "10", label: "Products taken to market" },
    { value: "1.6M", label: "Events / day at peak" },
  ],

  contact: {
    blurb:
      "I'm always up for talking shop: distributed systems, developer experience, testing culture, or why your abstraction is probably premature.",
    links: [
      { label: "Email", href: "mailto:derek.ac.drummond@gmail.com", value: "derek.ac.drummond@gmail.com", icon: "mail" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/derek-drummond/", value: "in/derek-drummond", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/hop-along-polly", value: "hop-along-polly", icon: "github" },
      { label: "dev.to", href: "https://dev.to/ezzy1337", value: "@ezzy1337", icon: "pen" },
    ],
  },
};
