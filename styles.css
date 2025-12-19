/* ----------------------------------------------------------------
   Variables & Reset
   EDIT: カラーと余白の変数を定義し、全体の一貫性を担保
----------------------------------------------------------------- */
:root {
    /* Color Palette */
    --color-bg: #F9F9F7;            /* ベース：オフホワイト */
    --color-bg-alt: #EFEFE9;        /* 背景バリエーション */
    --color-text-main: #333333;     /* メインテキスト */
    --color-text-light: #666666;    /* サブテキスト */
    
    --color-accent-main: #2F5D62;   /* キーカラー：落ち着いたグリーン */
    --color-accent-hover: #24484C;  /* ホバー時 */
    
    --color-accent-sub: #DFA67B;    /* アクセント：テラコッタ */
    
    --color-white: #FFFFFF;
    --color-border: #E0E0E0;

    /* Spacing & Layout */
    --max-width: 1120px;
    --header-height: 70px;
    --header-height-scrolled: 60px;
    
    /* Font Sizes */
    --font-size-base: 16px;
    --font-family: 'Noto Sans JP', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-family);
    background-color: var(--color-bg);
    color: var(--color-text-main);
    line-height: 1.8;
    font-size: var(--font-size-base);
    -webkit-font-smoothing: antialiased;
}

a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
}

ul { list-style: none; }
img { max-width: 100%; height: auto; object-fit: cover; }

/* ----------------------------------------------------------------
   Utility Classes
----------------------------------------------------------------- */
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-white { color: var(--color-white) !important; }
.mt-5 { margin-top: 40px; }
.sp-only { display: none; }

.section { padding: 80px 0; }
.bg-beige { background-color: var(--color-bg-alt); }

/* Fade In Animation */
.fade-in-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    will-change: opacity, transform;
}
.fade-in-section.is-visible {
    opacity: 1;
    transform: none;
}

/* ----------------------------------------------------------------
   Buttons & Badges
   EDIT: 影とホバー時の浮き上がりを追加して「押せる感」を強化
----------------------------------------------------------------- */
.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 14px 32px;
    border-radius: 6px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    font-size: 0.95rem;
}
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}
.btn--primary {
    background-color: var(--color-accent-main);
    color: var(--color-white);
    border: 2px solid var(--color-accent-main);
}
.btn--secondary {
    background-color: var(--color-white);
    color: var(--color-accent-main);
    border: 2px solid var(--color-accent-main);
}
.btn--outline {
    background-color: transparent;
    color: var(--color-accent-main);
    border: 1px solid var(--color-accent-main);
}
.btn--full { width: 100%; }

.badge {
    display: inline-block;
    background-color: var(--color-accent-sub);
    color: var(--color-white);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
}
.badge--dark { background-color: var(--color-accent-main); }

/* ----------------------------------------------------------------
   Header
   EDIT: Sticky時の背景色変化と高さ縮小を設定
----------------------------------------------------------------- */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: rgba(249, 249, 247, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(0,0,0,0.05);
}
.header.scrolled {
    height: var(--header-height-scrolled);
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.header__container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
}
.logo {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-accent-main);
}
.nav__list { display: flex; gap: 24px; align-items: center; }
.nav__link {
    font-size: 0.9rem;
    font-weight: 500;
    position: relative;
}
.nav__link:hover { color: var(--color-accent-main); }
.nav__link--cta {
    background: var(--color-accent-sub);
    color: white !important;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 700;
    transition: opacity 0.3s;
}
.nav__link--cta:hover { opacity: 0.8; }

/* Mobile Menu */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1002;
}
.bar {
    display: block;
    width: 25px;
    height: 2px;
    background: var(--color-accent-main);
    margin: 5px 0;
    transition: 0.3s;
}

/* ----------------------------------------------------------------
   Hero Section
----------------------------------------------------------------- */
.hero {
    padding-top: calc(var(--header-height) + 60px);
    padding-bottom: 60px;
}
.hero__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}
.hero__tagline {
    color: var(--color-accent-main);
    font-weight: 700;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
}
.hero__title {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 24px;
    color: var(--color-text-main);
}
.hero__desc {
    margin-bottom: 32px;
    color: var(--color-text-light);
    font-size: 1.05rem;
}
.hero__actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
.hero__visual {
    position: relative;
}
.image-placeholder {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
    background-color: #ddd;
}
.image-placeholder img {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.5s ease;
}
.image-placeholder:hover img { transform: scale(1.03); }

/* ----------------------------------------------------------------
   Challenge (Grid Layout)
----------------------------------------------------------------- */
.section-header { text-align: center; margin-bottom: 48px; }
.section-title {
    font-size: 2rem;
    color: var(--color-accent-main);
    margin-bottom: 8px;
}
.section-subtitle { color: var(--color-text-light); }

.grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}
.icon-card {
    background: white;
    padding: 24px 16px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}
.icon-card:hover { transform: translateY(-5px); }
.icon-circle {
    font-size: 2.5rem;
    margin-bottom: 16px;
    background: #f4f4f4;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
}
.icon-card h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: var(--color-accent-main);
}
.icon-card p {
    font-size: 0.9rem;
    color: var(--color-text-light);
    line-height: 1.5;
}

/* ----------------------------------------------------------------
   Individual Program (Cards)
----------------------------------------------------------------- */
.program-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    align-items: start;
}
.card {
    background: white;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    border: 1px solid transparent;
    transition: all 0.3s;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
}
.card.featured {
    border: 2px solid var(--color-accent-sub);
    transform: scale(1.03);
}
.card.featured:hover { transform: scale(1.03) translateY(-5px); }

.card__label {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-accent-sub);
    color: white;
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
}
.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
}
.card__header h3 { font-size: 1.25rem; color: var(--color-accent-main); }
.card__icon { font-size: 1.8rem; }
.card__desc {
    font-size: 0.95rem;
    color: var(--color-text-light);
    margin-bottom: 24px;
    flex-grow: 1;
}
.card__specs li {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-bottom: 8px;
    border-bottom: 1px dotted #eee;
    padding-bottom: 4px;
}
.card__specs span { color: #999; font-size: 0.8rem; }
.card__footer { margin-top: 24px; }

/* ----------------------------------------------------------------
   Organization (Split Layout)
----------------------------------------------------------------- */
.split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
.split-layout.reverse .split-content { order: 1; } /* Text first */
.split-layout.reverse .split-visual { order: 2; }

.lead-text {
    font-size: 1.1rem;
    margin-bottom: 24px;
    font-weight: 500;
}
.check-list li {
    margin-bottom: 12px;
    padding-left: 24px;
    position: relative;
    font-weight: 500;
}
.check-list li::before {
    content: "✔";
    color: var(--color-accent-main);
    position: absolute;
    left: 0;
    top: 0;
}
.roi-simple {
    background: #fff;
    border: 1px solid var(--color-border);
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
}
.roi-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
    flex-wrap: wrap;
}
.roi-label { font-weight: bold; color: var(--color-text-light); }
.roi-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-accent-main);
}
.roi-note { font-size: 0.75rem; color: #999; text-align: right; }

/* ----------------------------------------------------------------
   Articles & Profile
----------------------------------------------------------------- */
.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}
.article-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.3s;
    cursor: pointer;
}
.article-card:hover { transform: translateY(-5px); }
.article-thumb img { width: 100%; height: 200px; object-fit: cover; }
.article-content { padding: 20px; }
.article-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 8px;
}
.tag {
    background: #eee;
    padding: 2px 8px;
    border-radius: 4px;
    color: #555;
}
.article-title {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
}
.text-link {
    color: var(--color-accent-main);
    font-weight: 700;
    border-bottom: 1px solid currentColor;
}

.profile-box {
    display: flex;
    gap: 40px;
    align-items: center;
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.profile-img img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}
.founder-name { font-size: 1.1rem; margin-bottom: 16px; color: var(--color-accent-sub); }

/* ----------------------------------------------------------------
   Contact & Footer
----------------------------------------------------------------- */
.contact-section {
    background-color: var(--color-accent-main);
}
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
.form-group { margin-bottom: 20px; }
.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 0.9rem;
}
.form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
}

.footer {
    background: #333;
    color: #999;
    padding: 60px 0 20px;
    font-size: 0.9rem;
}
.footer__container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.footer__logo { color: white; font-weight: bold; font-size: 1.2rem; }
.footer__nav a { margin-left: 20px; color: #ccc; }
.footer__nav a:hover { color: white; }
.copyright { text-align: center; border-top: 1px solid #444; padding-top: 20px; }

/* ----------------------------------------------------------------
   Responsive (Mobile)
----------------------------------------------------------------- */
@media (max-width: 768px) {
    .sp-only { display: block; }
    .hero__container, .split-layout, .profile-box {
        grid-template-columns: 1fr;
        display: flex;
        flex-direction: column;
    }
    .hero__visual, .split-visual, .profile-img { width: 100%; order: -1; margin-bottom: 20px; }
    .hero__title { font-size: 2rem; }
    
    .grid-4, .program-cards, .grid-3 { grid-template-columns: 1fr; gap: 24px; }
    .card.featured { transform: none; border-width: 4px; }
    
    /* Mobile Menu */
    .mobile-menu-btn { display: block; }
    .nav {
        position: fixed;
        top: var(--header-height);
        right: -100%;
        width: 100%;
        height: calc(100vh - var(--header-height));
        background: white;
        transition: right 0.3s;
        padding: 40px;
        display: block;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .nav.active { right: 0; }
    .nav__list { flex-direction: column; align-items: flex-start; gap: 30px; }
    
    .footer__container { flex-direction: column; gap: 20px; text-align: center; }
    .footer__nav a { display: block; margin: 10px 0; margin-left: 0; }
}
