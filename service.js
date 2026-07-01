/* ==========================================
   SERVICES DATA
========================================== */

const services = {
    mern: {
        icon: "fa-brands fa-react",
        title: "MERN Stack Development",
        description:
            "Build scalable, secure, and modern web applications using MongoDB, Express.js, React, and Node.js.",

        tech: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "JWT",
            "REST API"
        ],

        features: [
            "Custom Web Applications",
            "REST API Development",
            "Responsive User Interface",
            "Authentication & Security",
            "Cloud Deployment",
            "Performance Optimization"
        ]
    },

    django: {
        icon: "fa-solid fa-code",
        title: "Full Stack Django Development",
        description:
            "Develop robust and secure applications with Django, delivering fast performance and enterprise-grade reliability.",

        tech: [
            "Django",
            "Python",
            "PostgreSQL",
            "DRF",
            "Bootstrap",
            "Docker"
        ],

        features: [
            "Admin Dashboard Development",
            "REST API Integration",
            "Secure Authentication",
            "Database Optimization",
            "Third-Party Integrations",
            "Scalable Architecture"
        ]
    },

    wordpress: {
        icon: "fa-brands fa-wordpress",
        title: "WordPress Website Development",
        description:
            "Professional WordPress solutions designed for businesses seeking flexibility, performance, and easy content management.",

        tech: [
            "WordPress",
            "PHP",
            "WooCommerce",
            "MySQL",
            "Elementor",
            "SEO"
        ],

        features: [
            "Custom Theme Development",
            "WooCommerce Stores",
            "SEO Optimization",
            "Speed Enhancement",
            "Mobile Responsive Design",
            "Easy Content Management"
        ]
    },

    crm: {
        icon: "fa-solid fa-users-gear",
        title: "CRM Website Development",
        description:
            "Streamline customer relationships and automate workflows with powerful CRM solutions tailored to your business.",

        tech: [
            "React",
            "Node.js",
            "MongoDB",
            "Django",
            "MySQL",
            "Analytics"
        ],

        features: [
            "Lead Management",
            "Sales Pipeline Tracking",
            "Role-Based Access",
            "Reporting Dashboards",
            "Workflow Automation",
            "Customer Insights"
        ]
    },

    ecommerce: {
        icon: "fa-solid fa-cart-shopping",
        title: "E-Commerce Development",
        description:
            "Conversion-focused online stores built to maximize sales and provide seamless shopping experiences.",

        tech: [
            "React",
            "Node.js",
            "Stripe",
            "Razorpay",
            "WooCommerce",
            "Analytics"
        ],

        features: [
            "Payment Gateway Integration",
            "Inventory Management",
            "Order Tracking",
            "Product Management",
            "Mobile Optimization",
            "Sales Analytics"
        ]
    },

    custom: {
        icon: "fa-solid fa-laptop-code",
        title: "Custom Software Solutions",
        description:
            "Tailored software applications designed to solve unique business challenges and drive innovation.",

        tech: [
            "Python",
            "JavaScript",
            "Node.js",
            "Django",
            "AWS",
            "Docker"
        ],

        features: [
            "Requirement Analysis",
            "Custom Development",
            "System Integration",
            "Business Automation",
            "Scalable Solutions",
            "Long-Term Support"
        ]
    }
};

/* ==========================================
   ELEMENTS
========================================== */

const tabs = document.querySelectorAll(".service-tab");

const icon = document.getElementById("serviceIcon");

const title = document.getElementById("serviceTitle");

const description = document.getElementById("serviceDescription");

const techStack = document.getElementById("techStack");

const featureList = document.getElementById("featureList");

/* ==========================================
   UPDATE SERVICE
========================================== */

function updateService(serviceKey) {

    const service = services[serviceKey];

    /* Fade Out */

    document.querySelector(".service-display")
        .classList.add("changing");

    setTimeout(() => {

        /* Icon */

        icon.innerHTML = `
            <i class="${service.icon}"></i>
        `;

        /* Title */

        title.textContent = service.title;

        /* Description */

        description.textContent = service.description;

        /* Tech Stack */

        techStack.innerHTML = "";

        service.tech.forEach(tech => {

            const span = document.createElement("span");

            span.textContent = tech;

            techStack.appendChild(span);

        });

        /* Features */

        featureList.innerHTML = "";

        service.features.forEach(feature => {

            const li = document.createElement("li");

            li.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                ${feature}
            `;

            featureList.appendChild(li);

        });

        /* Fade In */

        document.querySelector(".service-display")
            .classList.remove("changing");

    }, 200);
}

/* ==========================================
   TAB EVENTS
========================================== */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        /* Remove Active */

        tabs.forEach(btn =>
            btn.classList.remove("active")
        );

        /* Add Active */

        tab.classList.add("active");

        /* Update Content */

        updateService(
            tab.dataset.service
        );
    });

});

/* ==========================================
   AUTO ROTATE SERVICES (OPTIONAL)
========================================== */

// Uncomment if you want automatic switching

/*
const keys = Object.keys(services);

let current = 0;

setInterval(() => {

    current++;

    if (current >= keys.length) {
        current = 0;
    }

    const key = keys[current];

    tabs.forEach(tab => {

        tab.classList.remove("active");

        if (tab.dataset.service === key) {
            tab.classList.add("active");
        }

    });

    updateService(key);

}, 8000);
*/

/* ==========================================
   SMOOTH SCROLL BUTTONS
========================================== */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

/* ==========================================
   ENTRANCE ANIMATION
========================================== */

window.addEventListener("load", () => {

    const card = document.querySelector(
        ".service-display"
    );

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition =
            "all 0.8s ease";

        card.style.opacity = "1";

        card.style.transform =
            "translateY(0)";

    }, 150);

});

/* ==========================================
   HOVER GLOW EFFECT
========================================== */

const serviceCard =
    document.querySelector(".service-display");

serviceCard.addEventListener("mousemove", e => {

    const rect =
        serviceCard.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    serviceCard.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0, 212, 255, 0.08),
            transparent 35%
        ),
        linear-gradient(
            145deg,
            rgba(255,255,255,0.04),
            rgba(255,255,255,0.02)
        )
    `;
});

serviceCard.addEventListener("mouseleave", () => {

    serviceCard.style.background = `
        linear-gradient(
            145deg,
            rgba(255,255,255,0.04),
            rgba(255,255,255,0.02)
        )
    `;
});


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







const hdr = document.getElementById('hdr');

window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


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


// CURSOR GLOW
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


// GSAP
gsap.registerPlugin(ScrollTrigger);

const wrapper = document.querySelector(".horizontal-wrapper");
const cards = document.querySelectorAll(".service-card");

// total scroll distance = wrapper width - screen width
let scrollWidth = wrapper.scrollWidth - window.innerWidth;

gsap.to(wrapper, {
  x: -scrollWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    start: "top top",
    end: () => "+=" + scrollWidth,
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});



