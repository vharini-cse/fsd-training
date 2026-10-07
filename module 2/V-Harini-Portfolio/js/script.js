// =========================================================
// V. HARINI PORTFOLIO
// Main JavaScript
// =========================================================


// =========================================================
// 01. MOBILE NAVIGATION
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    // Open / close mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        // Change menu icon
        if (navLinks.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });


    // Close menu when a navigation link is clicked
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        });
    });


    // Close menu when clicking outside the navigation
    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            navLinks.classList.contains("show")
        ) {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        }
    });
}


// =========================================================
// 02. AUTOMATIC COPYRIGHT YEAR
// =========================================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================================
// 03. ACTIVE NAVIGATION LINK
// =========================================================

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const allNavLinks =
    document.querySelectorAll(".nav-links a");

allNavLinks.forEach((link) => {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// =========================================================
// 04. NAVBAR SCROLL EFFECT
// =========================================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}


// =========================================================
// 05. CLOSE MOBILE MENU ON WINDOW RESIZE
// =========================================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    }

});