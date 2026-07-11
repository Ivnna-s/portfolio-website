// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}