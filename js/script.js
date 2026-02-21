document.addEventListener('DOMContentLoaded', () => {
    
    // --- Routing System ---
    const navButtons = document.querySelectorAll('aside button');
    const sections = document.querySelectorAll('#content section');

    function navigateTo(sectionId) {
        // Hide all sections
        sections.forEach(sec => {
            sec.classList.remove('active');
        });

        // Deactivate all buttons
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Activate button
        const targetBtn = document.querySelector(`aside button[data-target="${sectionId}"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    // Attach click listeners to sidebar
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-target');
            if (target) {
                navigateTo(target);
            }
        });
    });

    // --- Sub-Routing for "Subjects Taken" ---
    window.changeSubjectPage = function(pageNumber) {
        const pages = document.querySelectorAll('.subject-page');
        const buttons = document.querySelectorAll('.subject-pagination-btn');

        pages.forEach(p => p.classList.remove('active'));
        buttons.forEach(b => {
            b.classList.remove('active');
            b.disabled = false;
        });

        const targetPage = document.getElementById('subjectList' + pageNumber);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        const targetBtn = document.getElementById('subjBtn' + pageNumber);
        if (targetBtn) {
            targetBtn.classList.add('active');
            targetBtn.disabled = true;
        }
    }


    // --- Carousel System ---
    let index = 0;
    
    window.moveCarousel = function(step) {
        const images = document.querySelectorAll('.carousel img');
        if(images.length === 0) return;
        
        index = (index + step + images.length) % images.length;
        document.getElementById('carousel').style.transform = `translateX(-${index * 100}%)`;
    }

    // Initialize to default page
    navigateTo('about');
});
