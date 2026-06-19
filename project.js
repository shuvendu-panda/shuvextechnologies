const hdr = document.getElementById('hdr');
  window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 40), { passive: true });

  // HAMBURGER
  const hbg = document.getElementById('hbg');
  const mob = document.getElementById('mob');
  hbg.addEventListener('click', () => {
    hbg.classList.toggle('active');
    mob.classList.toggle('open');
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hbg.classList.remove('active');
    mob.classList.remove('open');
  }));


const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));



const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});



const glow = document.querySelector('.cursor-glow');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  glow.style.left = currentX + 'px';
  glow.style.top = currentY + 'px';

  requestAnimationFrame(animate);
}

animate();

/* INTERACTION: grow on hover */
document.querySelectorAll('a, button, .fsoc').forEach(el => {
  el.addEventListener('mouseenter', () => {
    glow.style.transform = 'translate(-50%, -50%) scale(1.4)';
    glow.style.filter = 'blur(80px)';
  });

  el.addEventListener('mouseleave', () => {
    glow.style.transform = 'translate(-50%, -50%) scale(1)';
    glow.style.filter = 'blur(60px)';
  });
});
