document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('#content section');
    const navLinks = document.querySelectorAll('aside nav auto'); // We will change buttons to <a> tags with href="#section"

    // --- URL Hash Routing System ---
    function handleRouting() {
        // Get the hash from the URL, or default to '#about'
        let hash = window.location.hash || '#about';

        // Remove the '#' to get the section ID
        const targetId = hash.substring(1);

        // Hide all sections
        sections.forEach(sec => {
            sec.classList.remove('active');
            sec.setAttribute('aria-hidden', 'true');
        });

        // Deactivate all nav links
        const allNavLinks = document.querySelectorAll('aside nav a');
        allNavLinks.forEach(link => {
            link.classList.remove('active');
            link.setAttribute('aria-current', 'false');
        });

        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.setAttribute('aria-hidden', 'false');
        } else {
            // Fallback to about if id doesn't exist
            const fallback = document.getElementById('about');
            if (fallback) {
                fallback.classList.add('active');
                fallback.setAttribute('aria-hidden', 'false');
            }
        }

        // Activate corresponding nav link
        const activeLink = document.querySelector(`aside nav a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.setAttribute('aria-current', 'page');
        }

        // Ensure scroll jumps to top on navigation in mobile
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Listen to hash changes (Browser Back/Forward buttons and link clicks)
    window.addEventListener('hashchange', handleRouting);

    // Initial load route resolution
    handleRouting();


    // --- Carousel System ---
    let carouselIndex = 0;

    window.moveCarousel = function (step) {
        const images = document.querySelectorAll('.carousel img');
        if (images.length === 0) return;

        carouselIndex = (carouselIndex + step + images.length) % images.length;
        document.getElementById('carousel').style.transform = `translateX(-${carouselIndex * 100}%)`;
    }

});
