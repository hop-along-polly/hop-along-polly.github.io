/* ==========================================================================
   Articles
   --------------------------------------------------------------------------
   You normally do NOT need to touch this file.

   The Writing section pulls live from the dev.to API using the username in
   data/site.js, so publishing a post on dev.to is all it takes for it to
   appear here — no commit, no deploy.

   Two things below are still worth knowing about:

   1. ARTICLE_NOTES lets you annotate a post that the API can't describe on
      its own. Key is any distinctive substring of the article URL (the slug
      works well). `pinned: true` forces a post to the top of the list.

   2. ARTICLES_FALLBACK is the snapshot rendered if dev.to is unreachable.
      It only needs refreshing if you care about offline fidelity. Articles
      written somewhere *other* than dev.to can also be added here — anything
      listed is merged in and de-duplicated by URL.
   ========================================================================== */

const ARTICLE_NOTES = {
  "a-pythonic-guide-to-solid-design-principles": {
    pinned: true,
    note: "My most-read piece — SOLID explained in Python, without the Java ceremony.",
  },
  "go-v-python-a-technical-deep-dive": {
    note: "A long-form comparison of the two languages I reach for most.",
  },
};

const ARTICLES_FALLBACK = [
  {
    title: "Nobody Likes a DRY PASTRY",
    url: "https://dev.to/ezzy1337/nobody-likes-a-dry-pastry-2602",
    published_at: "2021-03-29T15:36:45Z",
    tag_list: ["codequality"],
    public_reactions_count: 7,
    reading_time_minutes: 7,
    description:
      "Welcome to another one of my vendetta articles. Last time it was A Pythonic Guide to SOLID Design Principles.",
  },
  {
    title: "Finding the Skeleton Buried In The Code",
    url: "https://dev.to/ezzy1337/finding-the-skeleton-buried-in-the-code-o70",
    published_at: "2021-03-10T03:33:48Z",
    tag_list: ["architecture"],
    public_reactions_count: 7,
    reading_time_minutes: 14,
    description:
      "So, that title is total clickbait and I apologize for that. Reading it you think this is going to be about dead code.",
  },
  {
    title: "A Test Driven Approach to Python Packaging",
    url: "https://dev.to/ezzy1337/a-test-driven-approach-to-python-packaging-105",
    published_at: "2020-06-15T04:02:55Z",
    tag_list: ["python", "testing", "codequality", "tutorial"],
    public_reactions_count: 35,
    reading_time_minutes: 6,
    description:
      "Recently I reached a breaking point with importing local packages in python, and went looking for a better way.",
  },
  {
    title: "Go v Python A Technical Deep Dive",
    url: "https://dev.to/ezzy1337/go-v-python-a-technical-deep-dive-5fni",
    published_at: "2020-05-18T06:55:34Z",
    tag_list: ["go", "python"],
    public_reactions_count: 13,
    reading_time_minutes: 20,
    description:
      "Python is well known for its simple, natural-language-like syntax. Go makes a very different set of trades.",
  },
  {
    title: "Get Going With Go",
    url: "https://dev.to/ezzy1337/get-going-with-go-1ba3",
    published_at: "2020-04-15T04:25:45Z",
    tag_list: ["go"],
    public_reactions_count: 5,
    reading_time_minutes: 3,
    description:
      "A quick introduction to installing the Go programming language and running your first program.",
  },
  {
    title: "A Pythonic Guide to SOLID Design Principles",
    url: "https://dev.to/ezzy1337/a-pythonic-guide-to-solid-design-principles-4c8i",
    published_at: "2020-03-20T22:39:36Z",
    tag_list: ["python", "codequality"],
    public_reactions_count: 310,
    reading_time_minutes: 11,
    description:
      "People that know me will tell you I am a big fan of the SOLID Design Principles championed by Robert C. Martin.",
  },
];
