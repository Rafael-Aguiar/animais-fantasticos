export default function initModal() {
  let link = document.querySelector('[data-modal="abrir"]');
  let modal = document.querySelector('[data-modal="container"]');
  let button = document.querySelector('[data-modal="fechar"]');

  if (link && modal && button) {

    let activeClass = 'ativo';

    function toggleModal(e) {
      e.preventDefault();
      modal.classList.toggle(activeClass);
    }

    function clickOutside(e) {
      if (e.target === this) {
        toggleModal(e) 
      };
    }

    if(link && modal) {

      link.addEventListener('click', toggleModal);

      button.addEventListener('click',toggleModal);

      modal.addEventListener('click', clickOutside);
    }
  }
}