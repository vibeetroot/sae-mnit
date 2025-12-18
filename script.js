document.addEventListener("DOMContentLoaded", () => {

  /* ================= PAGE FADE ================= */
  const fader = document.getElementById("page-fader");
  if (fader) {
    requestAnimationFrame(() => {
      fader.style.opacity = 0;
      fader.style.pointerEvents = "none";
    });
  }

  window.addEventListener("pageshow", () => {
    if (fader) {
      fader.style.opacity = 0;
      fader.style.pointerEvents = "none";
    }
  });

  /* ================= TEAM CARD CLICK ================= */
  document.querySelectorAll(".team-card").forEach(card => {
    card.addEventListener("click", () => {
      const target = card.dataset.target;
      if (!target) return;

      if (fader) fader.style.opacity = 1;

      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  });

  /* ================= HAMBURGER MENU ================= */
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});

  /* ================= EXPLORE TEAMS BUTTON ================= */
  const exploreBtn = document.getElementById("exploreTeamsBtn");
  const teamsSection = document.getElementById("teams");

  if (exploreBtn && teamsSection) {
    exploreBtn.addEventListener("click", () => {
      const headerOffset =
        document.querySelector(".site-header")?.offsetHeight || 0;

      const y =
        teamsSection.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset -
        20;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }

  /* ================= TIMELINE ================= */
  document.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", () => {
      document
        .querySelectorAll(".timeline-item")
        .forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  /* ================= HERO GEARS ================= */
  const gears = [
    document.getElementById("hero-gear-1"),
    document.getElementById("hero-gear-2")
  ].filter(Boolean);

  let angle = [0, 0];

  window.addEventListener("scroll", () => {
    angle[0] += window.scrollY * 0.0005;
    angle[1] -= window.scrollY * 0.0004;
    gears.forEach((g, i) => {
      g.style.transform = `rotate(${angle[i]}deg)`;
    });
  });

});
