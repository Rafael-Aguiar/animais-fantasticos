function initTabNav() {
  /* Função para ativar a navegação por tab */
  const tabMenu = document.querySelectorAll('.js-tabmenu li')

  const activeClass = 'ativo';

  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add(activeClass);

  if (tabMenu.length && tabContent.length){
    function activeTab(index) {
      tabContent.forEach((section) =>{
        section.classList.remove(activeClass);
      })
      tabContent[index].classList.add(activeClass)
    }
    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click',() => {
        activeTab(index)
      });
    });
  }
}
initTabNav();

function initAccordion() {
  /* Função para ativar a accordion list do faq */
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click',activeAccordion)
  });
}
}
initAccordion();

function initScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  console.log(linksInternos)

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const distanciaY = section.offsetTop;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}
initScroll();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
    const halfWindow = window.innerHeight * 0.7;

    function animaScroll () {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
    }
  }
  initAnimacaoScroll()