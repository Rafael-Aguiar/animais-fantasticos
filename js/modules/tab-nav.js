export default function initTabNav() {
  /* Função para ativar a navegação por tab */
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')

  const activeClass = 'ativo';

  const tabContent = document.querySelectorAll('[data-tab="content"] section')
  tabContent[0].classList.add(activeClass);

  if (tabMenu.length && tabContent.length){

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      let direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass)
      tabContent[index].classList.add(direcao);
    }
    
    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click',() => {
        activeTab(index)
      });
    });
  }
}