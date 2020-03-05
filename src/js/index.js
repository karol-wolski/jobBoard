import '../scss/style.scss';
import createFocusTrap from 'focus-trap';

const menuBtn = document.querySelector('#btn-menu');
const navMenu = document.querySelector('#nav-menu');
const navMenuLink = document.querySelectorAll('.menu__link');
const menuIcon = menuBtn.firstChild;

const focusTrapMobileNav = createFocusTrap('#navigation');

const MobileNavigationClose = () => {
  menuBtn.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('isActive');
  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
  focusTrapMobileNav.deactivate();
};

const MobileNavigationOpen = () => {
  menuBtn.setAttribute('aria-expanded', 'true');
  navMenu.classList.add('isActive');
  menuIcon.classList.remove('fa-bars');
  menuIcon.classList.add('fa-times');
  focusTrapMobileNav.activate();
};

const mobileNavigation = () => {
  menuBtn.addEventListener('click', () => {
    navMenuLink.forEach(item =>
      item.addEventListener('click', () => MobileNavigationClose())
    );

    const menuToggle = navMenu.classList.contains('isActive')
      ? MobileNavigationClose()
      : MobileNavigationOpen();
    return menuToggle;
  });
};

const init = () => {
  mobileNavigation();
};

init();
