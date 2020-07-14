import outsideClick from './outsideclick.js';

export default function initMobileMenu() {

  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    
    function openMenu(e) {
      menuButton.classList.toggle('active');
      menuList.classList.toggle('active');
      outsideClick(menuList, eventos, () => {
      })
    }

    
    eventos.forEach((userEvent) => {menuButton.addEventListener(userEvent, openMenu)})
    menuButton.addEventListener('click', openMenu);

  }
}