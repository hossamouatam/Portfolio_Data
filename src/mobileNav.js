const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bar');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        mobileNav.classList.toggle('active', isMobileNavOpen);
        document.body.classList.toggle('no-scroll', isMobileNavOpen);
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
};

export default mobileNav;
