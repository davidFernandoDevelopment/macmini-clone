const header = document.querySelector('.js-header');
const toggle = document.querySelector('.js-toggle');
const overlay = document.querySelector('.js-overlay')
const ACTIVE_CLASS = 'is-active';
const isDesktop = matchMedia('(min-width: 768px)');

const toggleMenu = () => header.classList.toggle(ACTIVE_CLASS);
const closeMenu = () => header.classList.remove(ACTIVE_CLASS);
const closeMenuWhenClickLink = (e) => {
    if (e.target.tagName === 'A') closeMenu();
    console.log('Hay listener en el header');
}
const closeWhenTypeScape = (e) => {
    if (e.code === "Escape") closeMenu();
}


const handleAddEventListener = () => {
    toggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    header.addEventListener('click', closeMenuWhenClickLink);
    header.addEventListener('keydown', closeWhenTypeScape);
}

const handleRemoveEventListener = () => {
    toggle.removeEventListener('click', toggleMenu);
    overlay.removeEventListener('click', closeMenu);
    header.removeEventListener('click', closeMenuWhenClickLink);
    header.removeEventListener('keydown', closeWhenTypeScape);
}

const handleEventListener = (mediaQuery) => {

    console.log({ mediaQuery });
    if (!mediaQuery.matches) {
        handleAddEventListener();
        console.log("Agregando ... ");
    } else {
        handleRemoveEventListener();
        console.log("Removiendo ... ");
    }
}
export const handleActiveMenu = () => {
    if (isDesktop.matches) handleAddEventListener();

    isDesktop.addEventListener('change', handleEventListener);
}