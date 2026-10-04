(function () {
  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Header border on scroll
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Decorative code lines in hero card
  var lines = document.getElementById('codeLines');
  var widths = [80, 60, 90, 45, 70, 55, 85, 40, 65, 75];
  var colors = ['--primary', '--accent', '--muted-fg'];
  widths.forEach(function (w, i) {
    var d = document.createElement('div');
    d.style.width = w + '%';
    d.style.background = 'hsl(var(' + colors[i % 3] + '))';
    d.style.marginLeft = i % 2 ? '1.5rem' : '0';
    lines.appendChild(d);
  });

  // Typing effect (cycles through roles)
  var roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver'];
  var el = document.getElementById('typed');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { el.textContent = roles[0]; }
  else {
    var r = 0, c = 0, del = false;
    (function tick() {
      var word = roles[r];
      el.textContent = word.slice(0, c);
      var delay = del ? 40 : 90;
      if (!del && c === word.length) { del = true; delay = 1400; }
      else if (del && c === 0) { del = false; r = (r + 1) % roles.length; delay = 350; }
      else { c += del ? -1 : 1; }
      setTimeout(tick, delay);
    })();
  }

  // Scroll reveal
  var targets = document.querySelectorAll('.hero-text,.avatar-card,.about-text,.stat,.timeline li,.tags,.contact-card,.section-head');
  targets.forEach(function (t) { t.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in'); });
  }
})();
