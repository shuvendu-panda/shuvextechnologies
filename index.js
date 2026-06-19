/* ═══════════════════════════════════════════════
   COMPLETE INDEX.HTML SCRIPT WITH FIXES
═══════════════════════════════════════════════ */

// HEADER SCROLL
const hdr = document.getElementById('hdr');
if (hdr) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      hdr.classList.add('scrolled');
    } else {
      hdr.classList.remove('scrolled');
    }
  }, { passive: true });
}

// HAMBURGER
const hbg = document.getElementById('hbg');
const mob = document.getElementById('mob');
if (hbg && mob) {
  hbg.addEventListener('click', () => {
    hbg.classList.toggle('active');
    mob.classList.toggle('open');
  });

  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hbg.classList.remove('active');
      mob.classList.remove('open');
    });
  });
}

// TYPING EFFECT
(() => {
  const el = document.getElementById('typed');
  if (!el) return;
  
  const words = ['Software Development', 'Web & Mobile Solutions', 'Digital Transformation', 'Innovation & Technology'];
  let wi = 0, ci = 0, del = false, spd = 100;
  
  function tick() {
    const w = words[wi];
    el.textContent = del ? w.slice(0, --ci) : w.slice(0, ++ci);
    spd = del ? 45 : 100;
    
    if (!del && ci === w.length) {
      del = true;
      spd = 2200;
    } else if (del && ci === 0) {
      del = false;
      wi = (wi + 1) % words.length;
      spd = 480;
    }
    
    setTimeout(tick, spd);
  }
  
  tick();
})();

// FAQ
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      
      faqItems.forEach(i => i.classList.remove('open'));
      
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    if (targetId === '#') return;

    const target = document.getElementById(targetId.substring(1));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// SCROLL REVEAL
if (window.IntersectionObserver) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
      }
    });
  }, {
    threshold: 0.07,
    rootMargin: '0px 0px -32px 0px'
  });
  
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ═══════════════════════════════════════════════
// BACK TO TOP BUTTON
// ═══════════════════════════════════════════════
const topBtn = document.getElementById('topBtn');
if (topBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  }, { passive: true });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ═══════════════════════════════════════════════
// CURSOR GLOW EFFECT (WITH FOOTER PREVENTION)
// ═══════════════════════════════════════════════
const glow = document.querySelector('.cursor-glow');
if (glow) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animate() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    glow.style.left = currentX + 'px';
    glow.style.top = currentY + 'px';

    requestAnimationFrame(animate);
  }

  animate();

  // GLOW INTERACTION: Grow on hover
  const interactiveElements = document.querySelectorAll('a, button, .fsoc, .btn-nav, .btn-primary, .btn-ghost');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      glow.style.transform = 'translate(-50%, -50%) scale(1.4)';
      glow.style.filter = 'blur(80px)';
    });

    el.addEventListener('mouseleave', () => {
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.filter = 'blur(60px)';
    });
  });

  // Disable glow effect in footer area
  const footer = document.querySelector('footer');
  if (footer) {
    footer.addEventListener('mouseenter', () => {
      glow.style.opacity = '0.3'; // Dim glow in footer
    });

    footer.addEventListener('mouseleave', () => {
      glow.style.opacity = '1'; // Restore glow opacity
    });
  }
}

// ═══════════════════════════════════════════════
// PERFORMANCE OPTIMIZATION
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Lazy load images
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src || entry.target.src;
          imageObserver.unobserve(entry.target);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }
});