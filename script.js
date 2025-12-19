document.addEventListener('DOMContentLoaded', () => {
    
    /* -------------------------------------------
       1. Sticky Header
       EDIT: スクロール量に応じたヘッダーの変化（影・背景）
    ------------------------------------------- */
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* -------------------------------------------
       2. Mobile Menu Toggle
    ------------------------------------------- */
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    const toggleMenu = () => {
        const isActive = nav.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', isActive);
        
        // アイコンアニメーション（簡易）
        const bars = menuBtn.querySelectorAll('.bar');
        if (isActive) {
            bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            bars.forEach(bar => bar.style.transform = 'none');
            bars[1].style.opacity = '1';
        }
    };

    menuBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) toggleMenu();
        });
    });

    /* -------------------------------------------
       3. Intersection Observer (Fade-in Animation)
       EDIT: ふわっと浮き上がる演出の制御
    ------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // 少し手前で発火
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => {
        observer.observe(el);
    });

    /* -------------------------------------------
       4. Smooth Scroll
    ------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // ヘッダー分ずらす
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
