//Menu
const SELECTOR_NAV_MINI = '.nav__mini';
const SELECTOR_NAV_LIST = '.nav__list';
const CLASS_NAV_ACTIVE = 'active';
const SELECTOR_NAVBAR = '.header__navbar';
const CLASS_NAVBAR_ACTIVE = 'scrolling';
var navMini = document.querySelector(SELECTOR_NAV_MINI);
var navList = document.querySelector(SELECTOR_NAV_LIST);
var navbar = document.querySelector(SELECTOR_NAVBAR);
//Mini menu
if ((navMini != null) && (navList != null)) {
    navMini.addEventListener('click', clickMiniMenu);
}
function clickMiniMenu() {
    navMini.classList.toggle(CLASS_NAV_ACTIVE);
    navList.classList.toggle(CLASS_NAV_ACTIVE);
    //document.body.style.overflow = "hidden";
}

if (navbar != null) {
    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
            navbar.classList.add(CLASS_NAVBAR_ACTIVE);
        } else {
            navbar.classList.remove(CLASS_NAVBAR_ACTIVE);
        }
    });
}

