(function () {
  const { profile, cvs } = window.PORTFOLIO;
  const side = document.getElementById("side");
  const main = document.getElementById("main");

  // Small helper to build elements safely (no innerHTML)
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (v == null || v === false || v === "") return;
      el.setAttribute(k, v);
    });
    kids.flat().forEach((k) => {
      if (k == null || k === false) return;
      el.append(k.nodeType ? k : document.createTextNode(k));
    });
    return el;
  }

  const ext = (label, url) =>
    h("a", { href: url, target: "_blank", rel: "noopener noreferrer" }, label);

  // ---- Photo: uses photo.jpg by default; shows initials if the file is missing ----
  const photoSrc = profile.photo === undefined ? "photo.jpg" : profile.photo;

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  }

  function photoEl() {
    const fallback = () => h("div", { class: "photo initials", "aria-hidden": "true" }, initials(profile.name));
    if (!photoSrc) return fallback();
    const img = h("img", { class: "photo", src: photoSrc, alt: "Photo of " + profile.name });
    img.addEventListener("error", () => img.replaceWith(fallback()));
    return img;
  }

  function renderSide(activeId) {
    const facts = [["Age", profile.age], ["From", profile.from]].filter((f) => f[1]);

    side.replaceChildren(
      h("div", { class: "id" },
        photoEl(),
        h("p", { class: "name" }, profile.name),
        h("p", { class: "role" }, profile.title)
      ),
      h("nav", { "aria-label": "CV versions" },
        h("p", { class: "nav-title" }, "CV versions"),
        h("ul", { class: "switch" },
          cvs.map((cv) =>
            h("li", {},
              h("a", {
                href: "#" + cv.id,
                class: "switch-item",
                "aria-current": cv.id === activeId ? "page" : null
              },
                h("span", { class: "switch-label" }, cv.label),
                h("span", { class: "switch-blurb" }, cv.blurb)
              )
            )
          )
        )
      ),
      h("div", { class: "contact" },
        facts.length > 0 && h("dl", { class: "facts" },
          facts.map(([k, v]) => [h("dt", {}, k), h("dd", {}, String(v))])
        ),
        profile.location && h("p", {}, profile.location),
        profile.email && h("p", {}, h("a", { href: "mailto:" + profile.email }, profile.email)),
        h("ul", { class: "links" },
          (profile.links || []).map((l) => h("li", {}, ext(l.label, l.url)))
        ),
        profile.email && h("a", { class: "mail-btn", href: "mailto:" + profile.email }, "Email me")
      )
    );
  }

  function section(title, content) {
    return h("section", { class: "block" }, h("h2", {}, title), content);
  }

  function renderMain(cv) {
    const parts = [];

    parts.push(
      h("header", { class: "intro" },
        h("h1", {}, cv.headline),
        h("p", { class: "summary" }, cv.summary),
        cv.pdf && h("a", { class: "btn", href: cv.pdf, download: "" }, "Download this CV (PDF)")
      )
    );

    if (cv.experience && cv.experience.length) {
      parts.push(section("Experience",
        h("div", { class: "rows" },
          cv.experience.map((e) =>
            h("article", { class: "row" },
              h("p", { class: "when" }, e.dates),
              h("div", {},
                h("h3", {}, e.role, h("span", { class: "org" }, " at " + e.org)),
                h("ul", { class: "bullets" }, (e.bullets || []).map((b) => h("li", {}, b)))
              )
            )
          )
        )
      ));
    }

    if (cv.projects && cv.projects.length) {
      parts.push(section("Projects",
        h("div", { class: "rows plain" },
          cv.projects.map((p) =>
            h("article", { class: "row" },
              h("p", { class: "when" }, p.url ? ext("View project", p.url) : ""),
              h("div", {},
                h("h3", {}, p.name),
                h("p", {}, p.description),
                p.tags && h("ul", { class: "tags" }, p.tags.map((t) => h("li", {}, t)))
              )
            )
          )
        )
      ));
    }

    const education = profile.education && profile.education.length ? profile.education : cv.education;
    if (education && education.length) {
      parts.push(section("Education",
        h("div", { class: "rows" },
          education.map((e) =>
            h("article", { class: "row" },
              h("p", { class: "when" }, e.dates),
              h("div", {},
                h("h3", {}, e.title, h("span", { class: "org" }, e.org ? " at " + e.org : "")),
                e.course && h("p", {}, "Course: " + e.course),
                e.result && h("p", { class: "result" }, e.result),
                e.grades && e.grades.length > 0 && h("ul", { class: "tags" }, e.grades.map((g) => h("li", {}, g)))
              )
            )
          )
        )
      ));
    }

    if (cv.skills && cv.skills.length) {
      parts.push(section("Skills",
        h("dl", { class: "skills" },
          cv.skills.map((s) => [h("dt", {}, s.group), h("dd", {}, s.items.join(", "))])
        )
      ));
    }

    if (profile.hobbies && profile.hobbies.length) {
      parts.push(section("Hobbies and interests",
        h("ul", { class: "tags" }, profile.hobbies.map((x) => h("li", {}, x)))
      ));
    }

    main.replaceChildren(...parts);
  }

  function show() {
    const id = location.hash.slice(1);
    const cv = cvs.find((c) => c.id === id) || cvs[0];
    document.title = profile.name + " | " + cv.label;
    renderSide(cv.id);
    renderMain(cv);
    if (id) window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", show);
  show();
})();
