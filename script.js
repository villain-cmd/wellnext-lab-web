document.addEventListener('DOMContentLoaded', () => {
    
    /* -------------------------------------------
       Header Scroll Effect
    ------------------------------------------- */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* -------------------------------------------
       Mobile Menu Toggle
    ------------------------------------------- */
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    // Toggle menu open/close
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Toggle hamburger animation
        const bars = menuBtn.querySelectorAll('.bar');
        if (nav.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            // Reset hamburger animation
            const bars = menuBtn.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    /* -------------------------------------------
       Smooth Scroll (Native CSS scroll-behavior 
       covers most, but JS fallback for offsets)
    ------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
