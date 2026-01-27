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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set Projects as active by default
    const projectsLink = document.querySelector('.nav-links a[onclick*="Projects"]');
    if (projectsLink) {
        projectsLink.classList.add('active');
    }
});
