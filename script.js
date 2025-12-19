document.addEventListener('DOMContentLoaded', () => {
    
    /* -------------------------------------------
       1. Sticky Header with Background Change
       EDIT: スクロール量に応じてクラスを付け外し
    ------------------------------------------- */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* -------------------------------------------
       2. Mobile Menu Toggle
       EDIT: ハンバーガーメニューの開閉処理
    ------------------------------------------- */
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    const toggleMenu = () => {
        nav.classList.toggle('active');
        
        // アイコンのアニメーション（簡易的なクラス切り替え）
        const bars = menuBtn.querySelectorAll('.bar');
        if (nav.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars.forEach(bar => bar.style.transform = 'none');
            bars[1].style.opacity = '1';
        }
    };

    menuBtn.addEventListener('click', toggleMenu);

    // リンクをクリックしたらメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) toggleMenu();
        });
    });

    /* -------------------------------------------
       3. Intersection Observer for Fade-in
       EDIT: .fade-in-section が画面に入ったら表示
    ------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target); // 一度だけ発火
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => {
        observer.observe(el);
    });

    /* -------------------------------------------
       4. Smooth Scroll for Anchor Links
    ------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // ヘッダーの高さ分ずらす
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
