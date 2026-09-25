/* ==========================================================================
   main.js renders every section from the files in data/.
   --------------------------------------------------------------------------
   Adding content should never mean touching this file. Projects come from
   data/projects.js, certifications from data/certifications.js, and articles
   are fetched live from dev.to with data/articles.js as the safety net.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Small helpers ----------------------------------------------------- */

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /** Escape anything that originates outside this repo (i.e. the dev.to API). */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function icon(name) {
    return ICONS[name] || "";
  }

  /** Paint every `[data-icon="foo"]` placeholder in the given subtree. */
  function hydrateIcons(root) {
    $$("[data-icon]", root).forEach((node) => {
      if (!node.dataset.iconDone) {
        node.innerHTML = icon(node.dataset.icon);
        node.dataset.iconDone = "1";
      }
    });
  }

  function monthYear(isoDate) {
    const d = new Date(isoDate);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }

  /* ==========================================================================
     Theme
     ========================================================================== */

  function initTheme() {
    const toggle = $("#theme-toggle");
    if (!toggle) return;

    const sync = () => {
      const isDark = document.documentElement.getAttribute("data-theme") !== "light";
      toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    };

    toggle.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode */ }
      sync();
    });

    sync();
  }

  /* ==========================================================================
     Reveal-on-scroll
     ========================================================================== */

  let revealObserver = null;

  function initReveal() {
    if (REDUCED_MOTION || !("IntersectionObserver" in window)) return;
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
  }

  /** Mark a subtree's direct reveal targets and start watching them. */
  function observeReveals(root) {
    const targets = $$(".reveal", root);
    if (!revealObserver) {
      targets.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    targets.forEach((node, i) => {
      node.style.setProperty("--reveal-delay", Math.min(i, 6) * 60 + "ms");
      revealObserver.observe(node);
    });
  }

  /* ==========================================================================
     Hero, stats, contact, footer
     ========================================================================== */

  function renderIdentity() {
    $("#hero-kicker").textContent = SITE.hero.kicker + " · " + SITE.location;
    $("#hero-lede").textContent = SITE.hero.lede;
    $("#hero-note").textContent = SITE.hero.note;
    $("#contact-blurb").textContent = SITE.contact.blurb;
    $("#footer-year").textContent = "© " + new Date().getFullYear() + " " + SITE.name;
    $(".brand__mark").textContent = SITE.monogram;

    $("#stats-list").innerHTML = SITE.stats
      .map(
        (stat) => `
        <div class="stat reveal">
          <dt class="stat__value">${esc(stat.value)}</dt>
          <dd class="stat__label">${esc(stat.label)}</dd>
        </div>`
      )
      .join("");

    $("#contact-links").innerHTML = SITE.contact.links
      .map(
        (link) => `
        <a class="contact-card reveal" href="${esc(link.href)}"
           ${/^https?:/.test(link.href) ? 'target="_blank" rel="noopener noreferrer"' : ""}>
          <span class="contact-card__icon" data-icon="${esc(link.icon)}"></span>
          <span class="contact-card__body">
            <span class="contact-card__label">${esc(link.label)}</span>
            <span class="contact-card__value">${esc(link.value)}</span>
          </span>
        </a>`
      )
      .join("");
  }

  /* ==========================================================================
     Projects
     ========================================================================== */

  function projectArt(project) {
    if (project.image) {
      return `<img src="${esc(project.image)}" alt="${esc(project.name)} screenshot" loading="lazy">`;
    }
    return MOTIFS[project.art] || MOTIFS.grid;
  }

  function projectLinks(project) {
    return (project.links || [])
      .map((link) => {
        const external = /^https?:/.test(link.href);
        return `<a class="btn ${link.primary ? "btn--primary" : "btn--ghost"}"
                   href="${esc(link.href)}"
                   ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
                  ${esc(link.label)}${external ? ' <span class="btn__ext" data-icon="external"></span>' : ""}
                </a>`;
      })
      .join("");
  }

  function chips(list) {
    return (list || []).map((t) => `<li class="chip">${esc(t)}</li>`).join("");
  }

  function renderFeaturedProject(project, index) {
    const number = String(index + 1).padStart(2, "0");
    return `
      <article class="project reveal">
        <div class="project__art">
          <div class="project__art-inner">${projectArt(project)}</div>
        </div>

        <div class="project__body">
          <p class="project__kicker">
            <span class="project__num">Project ${number}</span>
            ${project.year ? `<span class="project__year">${esc(project.year)}</span>` : ""}
            ${project.status ? `<span class="pill pill--live">${esc(project.status)}</span>` : ""}
          </p>

          <h3 class="project__name">${esc(project.name)}</h3>
          <p class="project__tagline">${esc(project.tagline)}</p>
          ${project.description ? `<p class="project__desc">${esc(project.description)}</p>` : ""}

          ${
            project.highlights && project.highlights.length
              ? `<ul class="project__highlights">
                   ${project.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
                 </ul>`
              : ""
          }

          <ul class="chips">${chips(project.tech)}</ul>
          <div class="project__actions">${projectLinks(project)}</div>
        </div>
      </article>`;
  }

  function renderCompactProject(project) {
    return `
      <article class="card reveal">
        <h4 class="card__name">${esc(project.name)}</h4>
        <p class="card__tagline">${esc(project.tagline)}</p>
        <ul class="chips chips--sm">${chips(project.tech)}</ul>
        <div class="card__actions">${projectLinks(project)}</div>
      </article>`;
  }

  function renderProjects() {
    const featured = PROJECTS.filter((p) => p.featured);
    const rest = PROJECTS.filter((p) => !p.featured);

    $("#featured-projects").innerHTML = featured.map(renderFeaturedProject).join("");
    $("#more-projects").innerHTML = rest.map(renderCompactProject).join("");
  }

  /* ==========================================================================
     Certifications
     ========================================================================== */

  const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

  /** "May 22 2029" -> Date, or null if unparseable. */
  function parseCertDate(label) {
    if (!label) return null;
    const parts = String(label).trim().split(/\s+/);
    if (parts.length !== 3) return null;
    const month = MONTHS.indexOf(parts[0].slice(0, 3).toLowerCase());
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    if (month < 0 || isNaN(day) || isNaN(year)) return null;
    return new Date(year, month, day);
  }

  function renderCerts() {
    $("#certs-list").innerHTML = CERTIFICATIONS.map((cert) => {
      const expiry = parseCertDate(cert.expires);
      const active = expiry ? expiry >= new Date() : null;
      const dates = cert.expires ? "Expires " + esc(cert.expires) : "";

      return `
        <article class="cert reveal">
          <div class="cert__seal" aria-hidden="true">
            <span class="cert__seal-text">${esc(cert.abbr || "★")}</span>
          </div>

          <div class="cert__body">
            <div class="cert__top">
              ${cert.level ? `<span class="cert__level">${esc(cert.level)}</span>` : ""}
              ${
                active === true
                  ? `<span class="pill pill--active">Active</span>`
                  : active === false
                  ? `<span class="pill">Expired</span>`
                  : ""
              }
            </div>

            <h3 class="cert__name">${esc(cert.name)}</h3>
            <p class="cert__issuer">${esc(cert.issuer)}</p>
            ${dates ? `<p class="cert__dates">${dates}</p>` : ""}
            ${
              cert.credentialUrl
                ? `<a class="cert__verify" href="${esc(cert.credentialUrl)}"
                      target="_blank" rel="noopener noreferrer">
                     Verify <span class="btn__ext" data-icon="external"></span>
                   </a>`
                : ""
            }
          </div>
        </article>`;
    }).join("");
  }

  /* ==========================================================================
     Articles: live from dev.to, with a local fallback
     ========================================================================== */

  /** Attach any hand-written note whose key appears in the article URL. */
  function decorate(article) {
    const key = Object.keys(ARTICLE_NOTES).find((k) => article.url.indexOf(k) !== -1);
    return Object.assign({}, article, key ? ARTICLE_NOTES[key] : null);
  }

  function normalize(list) {
    return list.map((a) =>
      decorate({
        title: a.title,
        url: a.url,
        published_at: a.published_at,
        tag_list: Array.isArray(a.tag_list)
          ? a.tag_list
          : String(a.tag_list || "").split(/,\s*/).filter(Boolean),
        public_reactions_count: a.public_reactions_count || 0,
        reading_time_minutes: a.reading_time_minutes || 0,
        description: a.description || "",
      })
    );
  }

  function mergeArticles(primary, fallback) {
    const seen = Object.create(null);
    const out = [];
    primary.concat(fallback).forEach((a) => {
      if (!a.url || seen[a.url]) return;
      seen[a.url] = true;
      out.push(a);
    });
    out.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    return out;
  }

  function articleRow(article) {
    const tags = (article.tag_list || [])
      .map((t) => `<li class="chip chip--xs">${esc(t)}</li>`)
      .join("");

    return `
      <li class="ledger__row reveal" data-tags="${esc((article.tag_list || []).join(" "))}">
        <a class="ledger__link" href="${esc(article.url)}" target="_blank" rel="noopener noreferrer">
          <span class="ledger__date">${esc(monthYear(article.published_at))}</span>

          <span class="ledger__main">
            <span class="ledger__title">${esc(article.title)}</span>
            ${article.note ? `<span class="ledger__note">${esc(article.note)}</span>` : ""}
            <ul class="chips chips--xs">${tags}</ul>
          </span>

          <span class="ledger__meta">
            ${
              article.reading_time_minutes
                ? `<span class="ledger__stat"><i data-icon="clock"></i>${article.reading_time_minutes} min</span>`
                : ""
            }
            ${
              article.public_reactions_count
                ? `<span class="ledger__stat"><i data-icon="heart"></i>${article.public_reactions_count}</span>`
                : ""
            }
            <span class="ledger__arrow" data-icon="external"></span>
          </span>
        </a>
      </li>`;
  }

  function renderFeatureArticle(article) {
    const host = $("#feature-article");
    if (!article) { host.innerHTML = ""; return; }

    host.innerHTML = `
      <a class="feature reveal" href="${esc(article.url)}"
         target="_blank" rel="noopener noreferrer"
         data-tags="${esc((article.tag_list || []).join(" "))}">
        <p class="feature__kicker">
          <span class="feature__spark" data-icon="spark"></span>
          Most read
        </p>
        <h3 class="feature__title">${esc(article.title)}</h3>
        <p class="feature__excerpt">${esc(article.note || article.description)}</p>
        <p class="feature__meta">
          <span>${esc(monthYear(article.published_at))}</span>
          <span aria-hidden="true">·</span>
          <span>${article.reading_time_minutes} min read</span>
          <span aria-hidden="true">·</span>
          <span>${article.public_reactions_count} reactions</span>
          <span class="feature__cta">Read on dev.to <i data-icon="external"></i></span>
        </p>
      </a>`;
  }

  function renderFilters(articles) {
    const counts = Object.create(null);
    articles.forEach((a) =>
      (a.tag_list || []).forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      })
    );

    const tags = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
    if (!tags.length) return;

    $("#article-filters").innerHTML =
      `<button class="filter is-active" type="button" data-tag="" aria-pressed="true">All</button>` +
      tags
        .map(
          (t) =>
            `<button class="filter" type="button" data-tag="${esc(t)}" aria-pressed="false">
               ${esc(t)} <span class="filter__count">${counts[t]}</span>
             </button>`
        )
        .join("");
  }

  function initFilters() {
    const bar = $("#article-filters");
    if (!bar) return;

    bar.addEventListener("click", (event) => {
      const button = event.target.closest(".filter");
      if (!button) return;

      const tag = button.dataset.tag;

      $$(".filter", bar).forEach((b) => {
        const on = b === button;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });

      let shown = 0;
      $$("#article-list .ledger__row").forEach((row) => {
        const match = !tag || row.dataset.tags.split(" ").indexOf(tag) !== -1;
        row.hidden = !match;
        if (match) shown++;
      });

      const feature = $(".feature");
      if (feature) {
        const match = !tag || feature.dataset.tags.split(" ").indexOf(tag) !== -1;
        feature.hidden = !match;
        if (match) shown++;
      }

      $("#article-empty").hidden = shown > 0;
    });
  }

  function paintArticles(articles, noticeText) {
    const loading = $("#article-loading");
    if (loading) loading.remove();

    /* Feature the pinned post if there is one, otherwise the best-received. */
    const pinned = articles.filter((a) => a.pinned);
    const feature = pinned.length
      ? pinned[0]
      : articles.slice().sort((a, b) => b.public_reactions_count - a.public_reactions_count)[0];

    const rest = articles.filter((a) => a !== feature);

    renderFeatureArticle(feature);
    $("#article-list").innerHTML = rest.map(articleRow).join("");
    renderFilters(articles);

    if (noticeText) {
      const notice = $("#article-notice");
      notice.textContent = noticeText;
      notice.hidden = false;
    }

    hydrateIcons($("#writing"));
    observeReveals($("#writing"));
  }

  function loadArticles() {
    const fallback = normalize(ARTICLES_FALLBACK);
    const endpoint =
      "https://dev.to/api/articles?username=" +
      encodeURIComponent(SITE.devtoUsername) +
      "&per_page=100";

    /* Don't let a slow API hold the section hostage. */
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 6000)
    );

    Promise.race([fetch(endpoint, { headers: { Accept: "application/json" } }), timeout])
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || !data.length) throw new Error("empty");
        paintArticles(mergeArticles(normalize(data), fallback), null);
      })
      .catch(() => {
        paintArticles(
          mergeArticles(fallback, []),
          "Showing a saved copy. dev.to couldn't be reached just now."
        );
      });
  }

  /* ==========================================================================
     Nav highlighting
     ========================================================================== */

  function initNav() {
    if (!("IntersectionObserver" in window)) return;

    const links = {};
    $$(".site-nav a").forEach((a) => {
      links[a.getAttribute("href").slice(1)] = a;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = links[entry.target.id];
          if (link) link.classList.toggle("is-current", entry.isIntersecting);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(links).forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ==========================================================================
     Boot
     ========================================================================== */

  function init() {
    initTheme();
    initReveal();

    renderIdentity();
    renderProjects();
    renderCerts();

    hydrateIcons(document);
    observeReveals(document);

    initFilters();
    initNav();
    loadArticles();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
