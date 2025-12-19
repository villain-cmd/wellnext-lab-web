document.addEventListener('DOMContentLoaded', () => {
    
    /* -------------------------------------------
       Header Scroll Effect (Sticky & Shrink)
       EDIT: よりスムーズな判定ロジックに変更
    ------------------------------------------- */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        // 50px以上スクロールしたらクラス付与
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* -------------------------------------------
       Intersection Observer for Fade-in Animation
       EDIT: セクションが見えたらふわっと表示する処理を追加
    ------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 15%見えたら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 一度発火したら監視解除（再アニメーションしない）
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    /* -------------------------------------------
       Mobile Menu Toggle
    ------------------------------------------- */
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggleMenuIcon();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggleMenuIcon();
        });
    });

    function toggleMenuIcon() {
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
    }

    /* -------------------------------------------
       Smooth Scroll (Native API)
       EDIT: ヘッダーの高さを考慮したスムーススクロール
    ------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // スクロール後のヘッダー高さを考慮
                const headerOffset = 70; 
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
