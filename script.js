// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".project-card, .service-card, .about-container, .contact-container, .why-card, .process-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("show");
    });

}


// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

if (navbar) {

    const updateNavbar = () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    };


    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });


    updateNavbar();

}


// ================= PREMIUM CUSTOM CURSOR =================

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const cursorGlow = document.querySelector(".cursor-glow");

const finePointer = window.matchMedia("(pointer: fine)").matches;


if (finePointer && cursorDot && cursorRing && cursorGlow) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let glowX = mouseX;
    let glowY = mouseY;


    // Initial cursor position

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;


    // Mouse movement

    document.addEventListener(
        "mousemove",
        (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

        },
        {
            passive: true
        }
    );


    // Smooth ring + glow movement

    function animateCursor() {

        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;

        glowX += (mouseX - glowX) * 0.06;
        glowY += (mouseY - glowY) * 0.06;

        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        requestAnimationFrame(animateCursor);

    }


    animateCursor();


    // ================= CURSOR HOVER =================

    const interactiveElements = document.querySelectorAll(
        "a, button, .project-card, .service-card, .about-card, .contact-card, .why-card, .process-card"
    );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursorRing.classList.add("hover");
            cursorDot.classList.add("hover");

        });


        element.addEventListener("mouseleave", () => {

            cursorRing.classList.remove("hover");
            cursorDot.classList.remove("hover");

        });

    });

}