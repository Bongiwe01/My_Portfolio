document.addEventListener('DOMContentLoaded', () => {
    // Automatically set dark mode on page load
    document.body.classList.add('dark-mode'); // This ensures the page starts in dark mode

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to navigation items while scrolling
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute("href").includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Dark mode toggle functionality
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleButton.innerHTML = document.body.classList.contains('dark-mode')
            ? '<i class="fas fa-toggle-on"></i>' // "On" icon
            : '<i class="fas fa-toggle-off"></i>'; // "Off" icon
    });

    // Show "Back to Top" button when scrolling
    const backToTopButton = document.getElementById('back-to-top');
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Back to Top functionality
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
