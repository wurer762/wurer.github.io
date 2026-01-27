// Navigation and page switching functionality

function showPage(pageName) {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link based on page name
    navLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (linkText === pageName || (pageName === 'home' && linkText === 'Projects')) {
            link.classList.add('active');
        }
    });
}

// Update active nav link based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('h1[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for header
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active from all links
    navLinks.forEach(link => {
        link.classList.remove('active');

        // Add active to matching link
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set Projects as active by default
    const projectsLink = document.querySelector('.nav-links a[onclick*="Projects"]');
    if (projectsLink) {
        projectsLink.classList.add('active');
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateActiveNavOnScroll);

    // Call once on load to set initial state
    updateActiveNavOnScroll();
});
