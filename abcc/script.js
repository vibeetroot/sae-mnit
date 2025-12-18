document.addEventListener('DOMContentLoaded', () => {

  /* PAGE FADE */
  const fader = document.getElementById('page-fader');
  if (fader) {
    requestAnimationFrame(() => {
      fader.style.opacity = 0;
      fader.style.pointerEvents = 'none';
    });
  }

  /* PAGE TRANSITION FOR HTML LINKS */
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      fader.style.opacity = 1;
      setTimeout(() => window.location = href, 420);
    });
  });

  /* SMOOTH IN-PAGE SCROLL (FIXED HEADER OFFSET) */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      e.preventDefault();

      const offset = 110;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
  });
// Competition timeline interaction
document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {

    // remove active from others
    document.querySelectorAll('.timeline-item')
      .forEach(i => i.classList.remove('active'));

    // activate clicked
    item.classList.add('active');
  });
});

  /* HERO GEARS ROTATION */
  const gears = [
    document.getElementById('hero-gear-1'),
    document.getElementById('hero-gear-2')
  ].filter(Boolean);

  let angle = [0,0];

  window.addEventListener('scroll', () => {
    angle[0] += window.scrollY * 0.0005;
    angle[1] -= window.scrollY * 0.0004;
    gears.forEach((g,i) => {
      g.style.transform = `rotate(${angle[i]}deg)`;
    });
  });

  /* TEAM CARD CLICK */
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.target;
      if (!target) return;
      fader.style.opacity = 1;
      setTimeout(() => window.location = target, 420);
    });
  });

});
