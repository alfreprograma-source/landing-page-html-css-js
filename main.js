 // ─── Custom Cursor ───
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });

    (function animRing() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, .skill-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
        ring.style.transform   = 'translate(-50%, -50%) scale(1.6)';
        ring.style.borderColor = 'rgba(200, 255, 71, 0.6)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        ring.style.transform   = 'translate(-50%, -50%) scale(1)';
        ring.style.borderColor = 'rgba(200, 255, 71, 0.35)';
      });
    });

    // ─── Scroll Reveal ───
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // ─── Nav shadow on scroll ───
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 40
        ? 'rgba(6, 6, 10, 0.85)'
        : 'transparent';
      nav.style.backdropFilter = window.scrollY > 40 ? 'blur(12px)' : 'none';
      nav.style.borderBottom = window.scrollY > 40
        ? '1px solid rgba(20,20,32,0.8)'
        : 'none';
      nav.style.transition = 'background 0.3s, border 0.3s';
    });