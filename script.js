```javascript
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// ================================
// CLOSE MENU AFTER CLICKING LINK
// ================================

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// ================================
// CHANGE NAVBAR ON SCROLL
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ================================
// SIMPLE REVEAL ANIMATION
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(section => {

    observer.observe(section);

});
```
