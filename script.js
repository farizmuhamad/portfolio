document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("year").textContent = new Date().getFullYear();

    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    /* ==============================
       NAVBAR SCROLL ACTIVE
    ============================== */

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && 
                window.scrollY < sectionTop + sectionHeight) 
                {
                currentSection = section.getAttribute("id");
                }
        });

        /* Navbar background saat scroll */
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        /* Nav link active */
        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });

    /* ==============================
       HAMBURGER MENU
    ============================== */

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
    /* Close menu saat klik link */
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});